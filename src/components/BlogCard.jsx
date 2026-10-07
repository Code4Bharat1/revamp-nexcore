"use client";

import Link from "next/link";

export default function BlogCard({ blog }) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={
            blog.featuredImage
              ? `${BASE_URL}${blog.featuredImage}`
              : "/default.jpg"
          }
          alt={blog.title || "Blog Image"}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70" />

        {/* CATEGORY BADGE */}
        {blog.category && (
          <span className="absolute top-3 left-3 bg-white/90 text-[#1e40af] text-xs px-3 py-1 rounded-full font-semibold shadow">
            {blog.category}
          </span>
        )}
      </div>

      <div className="p-5">

        {/* DATE */}
        <p className="text-xs text-gray-400">
          {new Date(blog.createdAt).toDateString()}
        </p>

        {/* TITLE */}
        <h2 className="text-lg font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-[#1e40af] transition">
          {blog.title}
        </h2>

        {/* EXCERPT */}
        <p className="text-gray-600 mt-2 text-sm line-clamp-3">
          {blog.excerpt || blog.content?.substring(0, 120)}...
        </p>

        {/* TAGS */}
        {blog.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-blue-50 text-[#1e40af] px-2 py-1 rounded-lg font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-2 mt-5 text-[#1e40af] font-semibold group-hover:gap-3 transition-all"
        >
          Read More
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}



