import React from 'react'

const SubscribedCoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      code: "WD101",
      duration: "3 Months",
      progress: 75,
      status: "Active",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=80&h=80&fit=crop&crop=center",
      gradient: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-200",
      textColor: "text-blue-900",
      subTextColor: "text-blue-700",
      progressBg: "bg-blue-200",
      progressFill: "bg-gradient-to-r from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      title: "React.js Advanced",
      code: "RJ201",
      duration: "2 Months",
      progress: 60,
      status: "Active",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop&crop=center",
      gradient: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-900",
      subTextColor: "text-emerald-700",
      progressBg: "bg-emerald-200",
      progressFill: "bg-gradient-to-r from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "Database Management",
      code: "DB301",
      duration: "4 Months",
      progress: 45,
      status: "Active",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=80&h=80&fit=crop&crop=center",
      gradient: "from-purple-500 to-violet-600",
      borderColor: "border-purple-200",
      textColor: "text-purple-900",
      subTextColor: "text-purple-700",
      progressBg: "bg-purple-200",
      progressFill: "bg-gradient-to-r from-purple-500 to-violet-500"
    }
  ]

  return (
    <div className="mb-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">My Learning Journey</h3>
            <p className="text-gray-600">Track your progress across all enrolled courses</p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-500">Active Courses</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">60%</div>
              <div className="text-sm text-gray-500">Avg Progress</div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`bg-white ${course.borderColor} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-opacity-70 group cursor-pointer`}
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-16 h-16 rounded-xl object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300"
                />
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${course.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-bold text-lg ${course.textColor} mb-1 group-hover:text-opacity-80 transition-colors leading-tight`}>
                  {course.title}
                </h4>
                <div className={`${course.subTextColor} text-sm space-y-1`}>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{course.code}</span>
                    <span className="w-1 h-1 bg-current rounded-full opacity-50"></span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`${course.subTextColor} text-sm font-medium`}>
                  Progress: {course.progress}%
                </div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 ${course.textColor} shadow-sm`}>
                  <div className={`w-2 h-2 bg-gradient-to-r ${course.gradient} rounded-full mr-2 animate-pulse`}></div>
                  {course.status}
                </div>
              </div>
              
              <div className="relative">
                <div className={`w-full ${course.progressBg} rounded-full h-3 shadow-inner`}>
                  <div
                    className={`${course.progressFill} h-3 rounded-full shadow-sm transition-all duration-700 ease-out relative overflow-hidden`}
                    style={{ width: `${course.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                  </div>
                </div>
                <div
                  className={`absolute top-0 w-1 h-3 bg-white rounded-full shadow-lg transition-all duration-700`}
                  style={{ left: `${Math.max(course.progress - 1, 0)}%` }}
                ></div>
              </div>

              <button className={`w-full mt-4 py-3 px-4 bg-gray-50 hover:bg-gray-100 ${course.textColor} font-semibold rounded-xl transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubscribedCoursesSection