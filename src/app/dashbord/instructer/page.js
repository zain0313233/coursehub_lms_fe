"use client";
import React, { useState, useEffect } from "react";
import CoursesSection from "./CoursesSection";
import BlogsSection from "./BlogsSection";
import AnalyticsSection from "./AnalyticsSection";
import FollowersSection from "./FollowersSection";
import NotificationsSectiontwo from "./NotificationsSection";
import StudentsSection from "./StudentsSection";
import ProfileSection from "./ProfileSection";
import DemoVideoSection from "./DemoVideoSection";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import axios from "axios";
import { useUser } from "@/context/UserContext";

const instructorData = {
  name: "Dr. Amanda Rodriguez",
  role: "Senior Web Development Instructor",
  email: "amanda.rodriguez@university.edu",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  specialization: "Full-Stack Development & UI/UX Design",
  experience: "15 years",
  tagline:
    "Empowering the next generation of developers through innovative teaching methods",
  followers: 2847,
  profilePicture: "../instructer.jpg",
  id: "INS789",
  batch: "Faculty 2018",
  status: "Active Instructor"
};

const InstructorDashboard = () => {
  const [instructorData, setInstructorData] = useState(null);
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
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 200) {
        setInstructorData(response.data.userdata);
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
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=400&fit=crop"
              alt="Instructor Dashboard Background"
              style={{ zIndex: 1 }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <h1 className="text-4xl font-semibold text-gray-200 font-serif">
                Instructor Dashboard
              </h1>
              <p className="text-gray-100 font-serif">
                Welcome, {instructorData?.name.split(" ")[1] || ""}!
              </p>
            </div>
          </div>

          <div className="flex w-full p-6 gap-6 items-start">
            <ProfileSection />

            <div className="w-[70%] bg-white shadow-md rounded-lg">
              <div className="p-6 bg-gray-800 text-white rounded-t-lg">
                <h2 className="text-2xl font-semibold">
                  Instructor Information
                </h2>
              </div>

              <div className="p-6">
                {loading ? (
                  <p>loading ...</p>
                ) : instructorData ? (
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
                              value={instructorData.name}
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
                              value={instructorData.email}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Address
                            </label>
                            <input
                              type="text"
                              value={instructorData.address}
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
                              value={instructorData.phone}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Specialization
                            </label>
                            <input
                              type="text"
                              value={instructorData.profile.subjects}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Experience
                            </label>
                            <input
                              type="text"
                              value={`${instructorData.profile.experience} of teaching`}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <CoursesSection />
                    <BlogsSection />
                    <FollowersSection />
                    <StudentsSection />
                    <DemoVideoSection />
                    <AnalyticsSection />
                    <NotificationsSectiontwo />

                    <div className="h-8"></div>
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

export default InstructorDashboard;
