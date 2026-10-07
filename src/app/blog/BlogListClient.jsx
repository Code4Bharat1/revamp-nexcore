"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function BlogListClient() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/blogs`);
        setBlogs(res.data.blogs || []);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, [BASE_URL]);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <main className="w-full">
        {/* HERO */}
        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white py-20 px-6 sm:px-12 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#e0e7ff] text-xs font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Trusted by Developers
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Latest <span className="text-orange-400">Blogs</span> &amp; Insights
            </h1>

            <p className="text-blue-100 max-w-lg leading-relaxed text-sm sm:text-base">
              Explore modern web development, enterprise AI, cloud architecture, and real-world tech tutorials to accelerate your digital growth.
            </p>
          </div>
        </div>

        {/* BLOG LIST */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">
              All Articles
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Browse the Collection
            </h2>
            <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mt-3" />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200">
                  <div className="h-48 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                  <div className="p-4 flex flex-col gap-3">
                    <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
                    <div className="h-3 w-1/2 bg-slate-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <p className="text-lg font-semibold text-slate-700">No blogs available</p>
              <p className="text-sm mt-1">Check back soon for new articles and engineering guides.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog._id} className="transition-transform duration-300 hover:-translate-y-1">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
