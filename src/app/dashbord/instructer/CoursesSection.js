"use client";
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Plus, Users, Star } from 'lucide-react';

import axios from "axios";
import { useUser } from "@/context/UserContext";

const CoursesSection = forwardRef((props, ref) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    if (!user?.id) return;
    
    try {
      setLoading(true);
      setError(null);
      const courseResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/teacher/${user.id}?limit=3`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      if (courseResponse.status === 200 && courseResponse.data.success) {
        setCourses(courseResponse.data.data.courses);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError('Failed to load courses');
    } finally {
      setLoading(false);
    }
  };

  useImperativeHandle(ref, () => ({
    refreshCourses: fetchCourses
  }));

  useEffect(() => {
    fetchCourses();
  }, [user?.id]);

  if (loading) {
    return (
      <div className="mb-12">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading courses...</p>
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
            onClick={fetchCourses}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">My Courses</h3>
          <p className="text-sm text-gray-600">Manage and track your course performance</p>
        </div>
        <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition flex items-center gap-2">
          <Plus size={16} />
          See All Courses
        </button>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-20">
          <div className="bg-gray-50 rounded-2xl p-12">
            <Users size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">No courses found</h3>
            <p className="text-gray-500 mb-6">You have not created any courses yet.</p>
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition flex items-center gap-2 mx-auto">
              <Plus size={16} />
              Create Your First Course
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.thumbnail || '/api/placeholder/400/200'}
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
                    ${course.price}
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
      )}
    </div>
  );
});

CoursesSection.displayName = 'CoursesSection';

export default CoursesSection;