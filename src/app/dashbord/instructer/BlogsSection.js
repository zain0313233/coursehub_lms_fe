"use client";
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from "axios"
import { useUser } from "@/context/UserContext";
import {  Eye,   PenTool,  } from 'lucide-react';

const BlogsSection = forwardRef((props, ref) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    if (!user?.id) return;
    
    try {
      setLoading(true);
      setError(null);
      const blogsResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/teacher/${user.id}?limit=3`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      if (blogsResponse.status === 200 && blogsResponse.data.success) {
       
        setBlogs(blogsResponse.data.data);
      }
    } catch (error) {
      console.error('Error fetching Blogs:', error);
      setError('Failed to load Blogs');
    } finally {
      setLoading(false);
    }
  };

  useImperativeHandle(ref, () => ({
    refreshBlogs: fetchBlogs
  }));

  useEffect(() => {
    fetchBlogs();
  }, [user?.id]);

  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="mb-12">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading Blogs...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={fetchBlogs}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return(
    <div className="mb-12">
      <div className="md:flex block items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">My Blogs</h3>
          <p className="text-sm text-gray-600">Share your knowledge and insights</p>
        </div>
        <button className="bg-cyan-600 md:mt-0 mt-6 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition flex items-center gap-2">
          <PenTool size={16} />
          See All Blog
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
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
               
                <span>{formatDate(blog.createdAt)}</span>
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
});

BlogsSection.displayName = "BlogsSection";

export default BlogsSection;