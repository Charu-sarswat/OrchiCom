"use client";

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Basic admin password for the client
const ADMIN_PASSWORD = "orchid@2026";

export default function LocationsAdminPage() {
  const [locations, setLocations] = useState<any[]>([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    areas: "",
    description: "",
    adminPass: ""
  });

  // Fetch initial locations
  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/locations');
      const data = await res.json();
      if (Array.isArray(data)) setLocations(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // Helper to auto-slugify
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    const slug = name.toLowerCase()
                  .replace(/[^a-z0-9 ]/g, '')
                  .replace(/\s+/g, '-');
    setFormData({ ...formData, name, slug });
  };

  const handleAddLocation = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    setMessage({ type: "", text: "" });

    const newLoc = {
      name: formData.name,
      slug: formData.slug,
      areas: formData.areas.split(',').map(a => a.trim()).filter(a => a),
      description: formData.description
    };

    try {
      const res = await fetch('/api/admin/locations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: formData.adminPass, location: newLoc })
      });

      const data = await res.json();

      if (data.success) {
        setMessage({ type: "success", text: "Successfully added new location!" });
        setFormData({ name: "", slug: "", areas: "", description: "", adminPass: "" });
        fetchLocations();
        setLastUpdated(new Date());
      } else {
        setMessage({ type: "error", text: data.error || "Failed to add location." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!window.confirm("Are you sure you want to delete this location? This cannot be undone.")) return;
    
    setActionLoading(true);
    try {
      const pass = window.prompt("Enter admin password to delete:");
      if (!pass) {
        setActionLoading(false);
        return;
      }
      
      const res = await fetch(`/api/admin/locations?slug=${slug}&password=${pass}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success) {
        fetchLocations();
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Delete failed.");
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-inter">
      <div className="container max-w-[1240px] px-6 mx-auto">
        
        {/* Header Section */}
        <section className="mb-12">
            <h1 className="text-[2.2rem] md:text-[3.2rem] font-bold text-black mb-4">
              Service <span className="text-primary">Locations Manager</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-[700px] leading-relaxed font-medium">
                Easily add or remove cities where <span className="text-primary font-bold">The Orchid Laundry</span> operates. Each addition will automatically generate 12 service pages and update the homepage.
            </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Side */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm shadow-slate-200 border border-slate-100 flex flex-col gap-6 sticky top-28">
              <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Plus size={22} />
                 </div>
                 Add New City
              </h3>
              
              <form onSubmit={handleAddLocation} className="space-y-6">
                 <div>
                   <label className="block text-sm font-black text-slate-700 uppercase tracking-wider mb-2">City Name</label>
                   <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={handleNameChange}
                    className="w-full p-4 rounded-2xl bg-slate-50 border-none transition-all outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-900" 
                    placeholder="e.g. Navi Mumbai" 
                   />
                 </div>
                 
                 <div>
                   <label className="block text-sm font-black text-slate-700 uppercase tracking-wider mb-2">Page Slug (Automatic)</label>
                   <input 
                    type="text" 
                    required
                    readOnly
                    value={formData.slug}
                    className="w-full p-4 rounded-2xl bg-slate-100 border-none font-bold text-slate-400 cursor-not-allowed" 
                    placeholder="navi-mumbai" 
                   />
                 </div>

                 <div>
                   <label className="block text-sm font-black text-slate-700 uppercase tracking-wider mb-2">Serviceable Areas (Comma Separated)</label>
                   <input 
                    type="text" 
                    required 
                    value={formData.areas}
                    onChange={(e) => setFormData({...formData, areas: e.target.value})}
                    className="w-full p-4 rounded-2xl bg-slate-50 border-none transition-all outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-900" 
                    placeholder="Sector 1, Sector 12, Station Area..." 
                   />
                 </div>

                 <div>
                   <label className="block text-sm font-black text-slate-700 uppercase tracking-wider mb-2">SEO Description (50+ words)</label>
                   <textarea 
                    rows={4} 
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-4 rounded-2xl bg-slate-50 border-none transition-all outline-none focus:ring-2 focus:ring-primary/20 font-medium text-slate-800 leading-relaxed" 
                    placeholder="Describe the service reach in this city... mention local landmarks or society types." 
                   />
                 </div>

                 <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                   <label className="block text-sm font-black text-slate-700 uppercase tracking-wider mb-2">Admin Password</label>
                   <input 
                    type="password" 
                    required 
                    value={formData.adminPass}
                    onChange={(e) => setFormData({...formData, adminPass: e.target.value})}
                    className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-primary/20 transition-all outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-900" 
                    placeholder="Authorized Password" 
                   />
                   
                   <button 
                     type="submit" 
                     disabled={actionLoading}
                     className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all shadow-xl shadow-primary/20 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
                    >
                      {actionLoading ? <Loader2 className="animate-spin" /> : <CheckCircle size={22} />}
                      Save New Location
                   </button>
                 </div>
              </form>

              {message.text && (
                 <div className={`p-5 rounded-2xl flex items-center gap-4 text-lg font-bold ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message.type === 'success' ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
                    {message.text}
                 </div>
              )}
            </div>
          </div>

          {/* List Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm shadow-slate-200 overflow-hidden">
                <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-2xl font-black text-slate-800">Current Locations ({locations.length})</h3>
                    <div className="text-sm font-bold text-slate-400">Last updated: {lastUpdated.toLocaleTimeString()}</div>
                </div>

                <div className="max-h-[800px] overflow-y-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-32 gap-4">
                            <Loader2 className="animate-spin text-primary" size={40} />
                            <p className="text-slate-400 font-bold uppercase tracking-widest">Loading Database...</p>
                        </div>
                    ) : locations.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-32 gap-4">
                           <MapPin className="text-slate-200" size={60} />
                           <p className="text-slate-400 font-bold uppercase tracking-widest">No locations configured</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-slate-100">
                           <AnimatePresence>
                                {locations.map((loc) => (
                                    <motion.div 
                                        key={loc.slug} 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="p-8 hover:bg-slate-50/70 transition-colors flex items-start gap-6 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary transition-all group-hover:text-white group-hover:scale-110">
                                            <MapPin size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-xl font-bold text-slate-900 mb-1">{loc.name}</h4>
                                                <button 
                                                    onClick={() => handleDelete(loc.slug)}
                                                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                            <div className="text-sm text-primary font-bold mb-3 uppercase tracking-wider italic">/services/[slug]/{loc.slug}</div>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{loc.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {loc.areas?.slice(0, 4).map((area: string, i: number) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold uppercase tracking-tighter">
                                                        {area}
                                                    </span>
                                                ))}
                                                {loc.areas?.length > 4 && <span className="text-xs font-bold text-primary pl-2 flex items-center">+{loc.areas.length - 4} more</span>}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                           </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="mt-8 p-8 bg-primary/5 border border-primary/20 rounded-[35px] flex items-start gap-5">
                <AlertCircle className="text-primary mt-1 shrink-0" size={24} />
                <div>
                   <h5 className="font-black text-slate-900 text-[1.1rem] mb-1 italic">Important Deployment Note</h5>
                   <p className="text-[#555] text-sm leading-relaxed font-medium m-0">
                       After adding or deleting a location, the website’s SEO layer is rebuilt instantly. However, for changes to reflect on the global sitemap across all search engines, ensure you have set the correct domain in the <code className="bg-primary/10 px-1 rounded">sitemap.ts</code> file.
                   </p>
                </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
