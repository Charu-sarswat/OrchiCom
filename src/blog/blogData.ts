export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "proper-suit-care",
    title: "How to Properly Care for Your Business Suits",
    excerpt: "Learn the essential tips to keep your suits looking sharp and lasting longer with professional care.",
    content: `A well-tailored suit is an investment that deserves the best care. To keep it looking sharp and lasting for years, regular maintenance is essential. 

First, never wear the same suit two days in a row. The wool fibers need time to rest and return to their natural shape. Use a horsehair brush after every wear to remove surface dust and food particles that can settle into the fabric.

When it comes to cleaning, dry clean your suit only when necessary—usually once every six months or if it gets a significant stain. Over-cleaning can break down the fibers and strip away the natural oils of the wool. In between cleans, use high-quality steam to remove wrinkles and refresh the fabric.

Always hang your suit on a wide, wooden hanger that supports the shoulders. Avoid plastic or wire hangers which can distort the shape over time. Store it in a breathable garment bag, not plastic, to prevent moisture buildup and allow the fabric to breathe.`,
    date: "Oct 12, 2023",
    image: "/img/dry-cleaning-jpg-500x500.webp",
    category: "Pro Tips",
    author: "Orchid Master Cleaner"
  },
  {
    slug: "bridal-dress-preservation",
    title: "The Importance of Wedding Dress Preservation",
    excerpt: "Preserve the memories of your special day by properly cleaning and storing your bridal wear.",
    content: `Your wedding dress is more than just a piece of clothing; it's a memory of one of the most important days of your life. Proper preservation is key to ensuring it stays beautiful for generations.

The most critical step is to have the dress cleaned as soon as possible after the wedding. Stains from champagne, cake, makeup, or grass might be invisible initially but can yellow and set over time, becoming permanent. 

A professional preservationist will use pH-neutral cleaning agents and wraps the dress in acid-free tissue paper. It is then placed in an archival-quality box with a viewing window. Store the box in a climate-controlled environment—avoiding attics or basements where temperature and humidity fluctuations can cause damage.`,
    date: "Sep 28, 2023",
    image: "/img/Bridal Wear Cleaning.jpeg",
    category: "Special Care",
    author: "Preservation Specialist"
  },
  {
    slug: "laundry-hacks-busy-people",
    title: "5 Time-Saving Laundry Hacks for Busy Professionals",
    excerpt: "Discover how to manage your laundry efficiently without sacrificing your precious weekend time.",
    content: `In today's fast-paced world, laundry can feel like a never-ending chore. Here are five hacks to help you reclaim your weekends.

1. Sort as you go: Use a divided hamper for lights, darks, and delicates. When a section is full, it's ready for the machine.
2. Use Mesh Bags: Put socks and small items in mesh bags to prevent them from getting lost or tangled.
3. The Steam Trick: Hang wrinkled clothes in the bathroom while you shower. The steam will naturally relax the fibers.
4. Fold Immediately: Don't let clothes sit in the dryer. Folding them while they are still warm prevents deep wrinkles.
5. Outsource it: Sometimes the best hack is to let the pros handle it. Services like our 'Wait and Fold' or 'Wash Per KG' can save you 10+ hours a week.`,
    date: "Nov 05, 2023",
    image: "/img/Laundry by Kilo.jpg",
    category: "Lifestyle",
    author: "Efficiency Expert"
  }
];
