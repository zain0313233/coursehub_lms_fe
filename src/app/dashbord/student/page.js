"use client";
import React, { useEffect, useState } from "react";
import SubscribedCoursesSection from "./SubscribedCoursesSection";
import MyInstructers from "./MyInstructers";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Profilesection from "./Profilesection";
import axios from "axios";
import { useUser } from "@/context/UserContext";

const Student = () => {
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const fetchData = async () => {
    try {
      if (!user?.id) return; 
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${user.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setUserdata(response.data.userdata);
        console.log("User data fetched:", response.data.userdata);
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?.id]); 

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg w-full h-auto">
          
          <div className="text-center mb-4 h-[200px] relative">
            <div
              className="absolute inset-0 bg-black opacity-50"
              style={{ zIndex: 2 }}
            ></div>
            <img
              className="absolute w-full h-full object-cover rounded-t-lg"
              src="../student.jpg"
              alt="Student Dashboard Background"
              style={{ zIndex: 1 }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <h1 className="text-4xl font-semibold text-gray-200 font-serif">
                Student Dashboard
              </h1>
              <p className="text-gray-100 font-serif">Welcome, Student!</p>
            </div>
          </div>

         
          <div className="md:flex block w-full p-6 min-h-[800px] gap-6">
            <Profilesection />

            <div className="md:w-[70%] w-full md:mt-0 mt-10 bg-white shadow-md rounded-lg">
              <div className="p-6 bg-gray-800 text-white rounded-t-lg">
                <h2 className="text-2xl font-semibold">Student Information</h2>
              </div>

              <div className="p-6">
                {loading ? (
                  <p>Loading...</p>
                ) : userdata ? (
                  <>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                        Personal Details
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              value={userdata.name || ""}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              value={userdata.email || ""}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Student Address
                            </label>
                            <input
                              type="text"
                              value={userdata.address || ""}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone
                            </label>
                            <input
                              type="text"
                              value={userdata.phone || ""}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <SubscribedCoursesSection />
                    <MyInstructers />
                  </>
                ) : (
                  <p>No user data found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Student;
