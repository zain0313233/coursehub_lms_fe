import React from "react";

const Profilesection = () => {
  return (
    <div className="w-[30%] bg-white shadow-md rounded-lg">
        <div className="p-6 bg-gray-800 text-white rounded-t-lg">
      <h1 className="text-2xl font-semibold text-white   text-center">
        Student Profile
      </h1>
      </div>
      <div className="relative p-5">
        <img
          className="w-full h-full object-cover rounded-full"
          src="../stu-profile.jpg"
          alt="Student Profile"
        />
      </div>
      <div className="px-8 py-2 text-center mt-4 ">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">John Whick</h2>
        <p className="text-gray-600 font-medium mb-1">
          Computer Science Student
        </p>
        <p className="text-sm text-gray-500 mb-4">ID: 123456 • Batch 2023</p>

        <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Active Student</span>
        </div>
      </div>

      <div className="px-8 pb-6">
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Quick Stats
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">80%</div>
              <div className="text-xs text-gray-500 font-medium">
                Profile Complete
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
              <div className="text-xs text-gray-500 font-medium">
                Active Courses
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Last Login</span>
              <span className="font-medium text-gray-900">Jan 1, 2024</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Quick Actions
          </h3>

          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <span className="font-semibold">Edit Profile</span>
          </button>

          <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3.5 px-4 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="font-semibold">My Courses</span>
          </button>

          <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3.5 px-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="font-semibold">Academic Records</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group hover:shadow-md">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="font-semibold">Sign Out</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Contact Information</p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-700 font-medium">john.dev.cs@gmail.com</p>
            <p className="text-gray-600">+123456789</p>
            <p className="text-gray-600">123 Main St, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilesection;
