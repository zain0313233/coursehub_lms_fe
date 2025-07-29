import React from 'react'
import SubscribedCoursesSection from './SubscribedCoursesSection'
import MyInstructers from './MyInstructers'
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import Profilesection from './Profilesection'

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
               <Profilesection/>

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