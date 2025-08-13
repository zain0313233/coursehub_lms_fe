"use client";
import React, { useState } from 'react';
import { User, Edit3, Plus, BarChart3,  PenTool } from 'lucide-react';
const instructorData = {
    name: "Dr. Amanda Rodriguez",
    role: "Senior Web Development Instructor",
    email: "amanda.rodriguez@university.edu",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    specialization: "Full-Stack Development & UI/UX Design",
    experience: "15 years",
    tagline: "Empowering the next generation of developers through innovative teaching methods",
    followers: 2847,
    profilePicture: "../instructer.jpg",
    id: "INS789",
    batch: "Faculty 2018",
    status: "Active Instructor"
  };
  const courses = [
    {
      id: 1,
      title: "Complete React.js Bootcamp 2024",
      code: "WD101",
      duration: "6 Months",
      category: "Web Development",
      price: "$149.99",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      students: 1234,
      rating: 4.8,
      reviews: 456,
      status: "Active",
      progress: 85
    },
    {
      id: 2,
      title: "Advanced JavaScript Patterns",
      code: "JS201",
      duration: "4 Months",
      category: "Programming",
      price: "$99.99",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
      students: 892,
      rating: 4.9,
      reviews: 234,
      status: "Active",
      progress: 92
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      code: "UX301",
      duration: "3 Months",
      category: "Design",
      price: "$79.99",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      students: 567,
      rating: 4.7,
      reviews: 189,
      status: "Active",
      progress: 78
    }
  ];
  
 
 const ProfileSection = () => (
    <div className="w-[30%] bg-white shadow-md rounded-lg">
      <div className="p-6 bg-gray-800 text-white rounded-t-lg">
        <h1 className="text-2xl font-semibold text-white text-center">
          Instructor Profile
        </h1>
      </div>
      <div className="relative p-5">
        <img
          className="w-full h-full object-cover rounded-full"
          src={instructorData.profilePicture}
          alt="Instructor Profile"
        />
      </div>
      <div className="px-8 py-2 text-center mt-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{instructorData.name}</h2>
        <p className="text-gray-600 font-medium mb-1">
          {instructorData.role}
        </p>
        <p className="text-sm text-gray-500 mb-4">ID: {instructorData.id} • {instructorData.batch}</p>

        <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>{instructorData.status}</span>
        </div>
      </div>

      <div className="px-8 pb-6">
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Quick Stats
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-xs text-gray-500 font-medium">
                Course Quality
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{courses.length}</div>
              <div className="text-xs text-gray-500 font-medium">
                Active Courses
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total Students</span>
              <span className="font-medium text-gray-900">2,693</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-600">Followers</span>
              <span className="font-medium text-gray-900">{instructorData.followers}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Quick Actions
          </h3>

          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group">
            <Edit3 className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-semibold">Edit Profile</span>
          </button>

          <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3.5 px-4 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group">
            <Plus className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-semibold">Create Course</span>
          </button>

          <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3.5 px-4 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group">
            <PenTool className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-semibold">Write Blog</span>
          </button>

          <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3.5 px-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group">
            <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-semibold">Analytics</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group hover:shadow-md">
            <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-semibold">Sign Out</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Contact Information</p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-700 font-medium">{instructorData.email}</p>
            <p className="text-gray-600">{instructorData.phone}</p>
            <p className="text-gray-600">{instructorData.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
  export default ProfileSection;