"use client";
import React from 'react';
import { DollarSign, TrendingUp, BarChart3, Award } from 'lucide-react';
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
const AnalyticsSection = () => (
    <div className="mb-12">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Sales & Purchase Analytics</h3>
        <p className="text-sm text-gray-600">Track your course sales and revenue performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold">This Week</h4>
            <DollarSign size={24} />
          </div>
          <div className="text-3xl font-bold mb-2">$2,847</div>
          <p className="text-blue-100 text-sm">23 courses sold</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold">This Month</h4>
            <TrendingUp size={24} />
          </div>
          <div className="text-3xl font-bold mb-2">$12,450</div>
          <p className="text-green-100 text-sm">89 courses sold</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold">This Year</h4>
            <BarChart3 size={24} />
          </div>
          <div className="text-3xl font-bold mb-2">$87,230</div>
          <p className="text-purple-100 text-sm">1,234 courses sold</p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold">Top Course</h4>
            <Award size={24} />
          </div>
          <div className="text-lg font-bold mb-2">React Bootcamp</div>
          <p className="text-orange-100 text-sm">$45,600 revenue</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h4 className="font-semibold text-gray-800 mb-4">Top Selling Courses</h4>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">{course.title}</h5>
                  <p className="text-sm text-gray-600">{course.students} students • {course.rating}⭐</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{course.price}</div>
                <div className="text-sm text-green-600">+{Math.floor(Math.random() * 20)}% this month</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  export default AnalyticsSection;

