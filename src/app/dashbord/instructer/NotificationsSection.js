 "use client";
import React, { useState } from 'react';
import {  Users,  Star,  DollarSign,  } from 'lucide-react';
 const notifications = [
    {
      id: 1,
      type: "enrollment",
      message: "New student enrolled in React.js Bootcamp",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "review",
      message: "5-star review received on JavaScript Patterns",
      time: "4 hours ago",
      read: false
    },
    {
      id: 3,
      type: "sale",
      message: "Course purchased: UI/UX Design Fundamentals",
      time: "1 day ago",
      read: true
    }
  ];
  
   const NotificationsSectiontwo = () => (
    <div className="mb-12">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Notifications</h3>
        <p className="text-sm text-gray-600">Stay updated with your course activities</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center justify-between p-4 rounded-lg ${notification.read ? 'bg-gray-50' : 'bg-blue-50'}`} 
              style={{ borderLeft: `4px solid ${notification.read ? '#d1d5db' : '#3b82f6'}` }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${notification.read ? 'bg-gray-400' : 'bg-blue-600'}`}>
                  {notification.type === 'enrollment' ? <Users size={16} /> : notification.type === 'review' ? <Star size={16} /> : <DollarSign size={16} />}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
              <button className={`text-sm font-medium ${notification.read ? 'text-gray-500' : 'text-blue-600 hover:text-blue-700'}`}>
                {notification.read ? 'Read' : 'Mark as Read'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  export default NotificationsSectiontwo;