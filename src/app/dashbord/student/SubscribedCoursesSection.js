import React from 'react'
import {MoveRight} from "lucide-react";

const SubscribedCoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      code: "WD101",
      duration: "3 Months",
      progress: 75,
      status: "Active",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop&crop=center",
      Author: "John Doe",
      AuthorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "React.js Advanced",
      code: "RJ201",
      duration: "2 Months",
      progress: 60,
      status: "Active",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop&crop=center",
      Author: "Jane Smith",
      AuthorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      title: "Database Management",
      code: "DB301",
      duration: "4 Months",
      progress: 45,
      status: "Active",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop&crop=center",
      Author: "Alice Johnson",
      AuthorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=center"
    }
  ]

  return (
    <div className="mb-12 px-4 sm:px-6 lg:px-1">
      <div className="mb-10">

          <div className="mb-6 lg:mb-0">
           
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
              My Learning Journey
            </h3>
            <p className="text-sm text-gray-600 max-w-md">
              Track your progress across all enrolled courses and continue building your skills
            </p>
         
          
          
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
                  {course.status}
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

              <h4 className="font-bold text-xl text-gray-900 mb-4 leading-tight group-hover:text-gray-700 transition-colors">
                {course.title}
              </h4>

              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={course.AuthorImage}
                  alt={course.Author}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">by {course.Author}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Progress</span>
                  <span className="text-sm font-bold text-gray-900">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-full transition-all duration-1000 ease-out"
                    style={{width: `${course.progress}%`}}
                  ></div>
                </div>
              </div>

              <button className="flex w-full gap-1  text-black font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 ">
                Continue Learning
                <MoveRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubscribedCoursesSection