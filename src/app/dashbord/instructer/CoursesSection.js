"use client";
import React, { useState } from 'react';
import {  Plus,  Users,   Star, } from 'lucide-react';
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

const CoursesSection = () => (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">My Courses</h3>
          <p className="text-sm text-gray-600">Manage and track your course performance</p>
        </div>
        <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition flex items-center gap-2">
          <Plus size={16} />
          Create New Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
                  {course.status}
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-600 text-white">
                  {course.price}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700">
                  {course.code}
                </span>
                <span className="text-sm text-gray-500 font-medium">{course.duration}</span>
              </div>

              <h4 className="font-bold text-lg text-gray-900 mb-3 leading-tight">
                {course.title}
              </h4>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">{course.students} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="text-sm text-gray-500">({course.reviews})</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-cyan-600 text-white py-2 px-3 rounded-lg hover:bg-cyan-700 transition text-sm font-medium">
                  Edit
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition text-sm font-medium">
                  View
                </button>
                <button className="bg-red-100 text-red-600 py-2 px-3 rounded-lg hover:bg-red-200 transition text-sm font-medium">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
export default CoursesSection;