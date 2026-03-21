import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { revalidatePath, revalidateTag } from "next/cache";

// Absolute path to the data file
const DATABASE_PATH = path.join(process.cwd(), "src/services/data/locations.json");

export async function GET() {
  try {
    const fileData = await fs.readFile(DATABASE_PATH, "utf-8");
    const locations = JSON.parse(fileData);
    return NextResponse.json(locations);
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { password, location } = data;

    // VERY BASIC PROTECTION
    // Ideally use env variables, but for a quick setup we'll set a default
    // and instruct the dev to update it.
    if (password !== "orchid@2026") {
      return NextResponse.json({ error: "Invalid admin password" }, { status: 401 });
    }

    if (!location || !location.name || !location.slug) {
      return NextResponse.json({ error: "Missing required location fields" }, { status: 400 });
    }

    // Load existing
    const fileData = await fs.readFile(DATABASE_PATH, "utf-8");
    const locations = JSON.parse(fileData);

    // Check for duplicates
    if (locations.some((l: any) => l.slug === location.slug)) {
       return NextResponse.json({ error: "Location slug already exists" }, { status: 400 });
    }

    // Add and save
    const updated = [...locations, location];
    await fs.writeFile(DATABASE_PATH, JSON.stringify(updated, null, 2), "utf-8");

    // Bust the Next.js cache so the home page and sitemap update instantly
    revalidatePath("/");
    revalidatePath("/sitemap.xml");
    revalidatePath("/services");

    return NextResponse.json({ success: true, count: updated.length });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    const password = searchParams.get("password");

    if (password !== "orchid@2026") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!slug) return NextResponse.json({ error: "Slug required" }, { status: 400 });

    const fileData = await fs.readFile(DATABASE_PATH, "utf-8");
    const locations = JSON.parse(fileData);

    const updated = locations.filter((l: any) => l.slug !== slug);
    await fs.writeFile(DATABASE_PATH, JSON.stringify(updated, null, 2), "utf-8");

    revalidatePath("/");
    revalidatePath("/sitemap.xml");

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
