import React from 'react'
import SubscribedCoursesSection from './SubscribedCoursesSection'
import MyInstructers from './MyInstructers'
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'

const Student = () => {
  return (
  <>
  <Navbar />
    <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg w-full h-auto">
            <div className="text-center mb-4 h-[200px] relative">
                <div className="absolute inset-0 bg-black opacity-50" style={{ zIndex: 2 }}></div>
                <img
                className="absolute w-full h-full object-cover rounded-t-lg"
                src="../student.jpg"
                alt="Student Dashboard Background"
                style={{ zIndex: 1 }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                    <h1 className="text-4xl font-semibold text-gray-200 font-serif">Student Dashboard</h1>
                    <p className="text-gray-100 font-serif">Welcome, Student!</p>
                </div>
            </div>
            <div className="flex w-full p-6 min-h-[800px] gap-6">
                <div className="w-[30%] bg-white shadow-md rounded-lg">
                    <div className="relative h-64">
                        <img
                        className="w-full h-full object-cover rounded-t-lg"
                        src="../stu-profile.jpg"
                        alt="Student Profile"
                        />
                    </div>
                    <div className="p-6 bg-gray-800 text-white">
                        <h2 className="text-2xl font-semibold mb-4">John Whick</h2>
                        <div className="space-y-2 text-sm">
                            <p className="text-gray-300">john.dev.cs@gmail.com</p>
                            <p className="text-gray-300">Student ID: 123456</p>
                            <p className="text-gray-300">Course: Computer Science</p>
                            <p className="text-gray-300">Batch: 2023</p>
                            <p className="text-gray-300">Phone: +123456789</p>
                            <p className="text-gray-300">Address: 123 Main St, City, Country</p>
                            <p className="text-gray-300">Date of Birth: January 1, 2000</p>
                            <p className="text-gray-300">Joined Date: January 1, 2023</p>
                            <p className="text-gray-300">Status: Active</p>
                            <p className="text-gray-300">Last Login: January 1, 2024</p>
                            <p className="text-gray-300">Profile Completion: 80%</p>
                        </div>
                    </div>
                    <div className="p-6 bg-white border-t space-y-3">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-md flex items-center justify-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <span>Edit Profile</span>
                        </button>
                        <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-4 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition duration-300 shadow-md flex items-center justify-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>My Courses</span>
                        </button>
                        <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition duration-300 shadow-md flex items-center justify-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span>Academic Records</span>
                        </button>
                        <button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-3 px-4 rounded-lg hover:from-slate-700 hover:to-slate-800 transition duration-300 shadow-md flex items-center justify-center space-x-2 border-t border-gray-200 mt-4 pt-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>

                <div className="w-[70%] bg-white shadow-md rounded-lg">
                    <div className="p-6 bg-gray-800 text-white rounded-t-lg">
                        <h2 className="text-2xl font-semibold">Student Information</h2>
                    </div>
                    
                    <div className="p-6">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Personal Details</h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input 
                                            type="text" 
                                            value="John Whick" 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            value="john.dev.cs@gmail.com" 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
                                        <input 
                                            type="text" 
                                            value="123456" 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input 
                                            type="text" 
                                            value="+123456789" 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <SubscribedCoursesSection />
                        <MyInstructers />

                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
  </>
  )
}

export default Student