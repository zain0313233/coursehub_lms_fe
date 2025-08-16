"use client";
import React, { useState } from 'react';
import {  Eye,   PenTool,  } from 'lucide-react';
const blogs = [
    {
      id: 1,
      title: "10 Essential React Hooks Every Developer Should Know",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
      date: "Jan 15, 2024",
      views: 2847,
      category: "Tutorial"
    },
    {
      id: 2,
      title: "The Future of Frontend Development in 2024",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
      date: "Jan 10, 2024",
      views: 1923,
      category: "Industry"
    },
    {
      id: 3,
      title: "Building Accessible Web Applications",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop",
      date: "Jan 5, 2024",
      views: 1456,
      category: "Best Practices"
    }
  ];
const BlogsSection = () => (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">My Blogs</h3>
          <p className="text-sm text-gray-600">Share your knowledge and insights</p>
        </div>
        <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition flex items-center gap-2">
          <PenTool size={16} />
          See All Blog
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-3 leading-tight line-clamp-2">
                {blog.title}
              </h4>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>{blog.date}</span>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{blog.views.toLocaleString()} views</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-cyan-100 text-cyan-700 py-2 px-3 rounded-lg hover:bg-cyan-200 transition text-sm font-medium">
                  Edit
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition text-sm font-medium">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
export default BlogsSection;