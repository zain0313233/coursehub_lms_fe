"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import axios from "axios";
import { useUser } from "@/context/UserContext";

const Instructers = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/role/teacher`);
      setInstructors(response.data.users || []);
    } catch (error) {
      setError('Failed to fetch instructors');
      console.error('Error fetching instructors:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnrollNow = (instructorId) => {
    if (!user) {
      alert('Please login to enroll');
      return;
    }
    console.log('Enrolling with instructor:', instructorId);
  };

  const handleViewProfile = (instructorId) => {
    window.location.href = `/instructor-profile/${instructorId}`;
  };

  const getSubjectsDisplay = (subjects) => {
    if (!subjects || subjects.length === 0) return 'No subjects listed';
    return subjects.slice(0, 3).join(', ') + (subjects.length > 3 ? '...' : '');
  };

  const calculateHourlyRate = (experience) => {
    const baseRate = 25;
    return Math.min(baseRate + (experience * 2), 80);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading instructors...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={fetchInstructors}
              className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
                Start Your Coaching From World Class Instructors
              </h1>
              <p className="text-gray-100 font-serif">Welcome, Student!</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Expert Instructors</h2>
            <p className="text-gray-600">Choose from our pool of experienced educators</p>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mt-2"></div>
          </div>

          {instructors.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">👨‍🏫</div>
              <h3 className="text-xl text-gray-600 mb-2">No Instructors Available</h3>
              <p className="text-gray-500">Please check back later for available instructors.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructors.map((instructor) => (
                <div key={instructor._id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <img
                          src={instructor?.profileImageUrl || '/default-avatar.png'}
                          alt={instructor.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-bold text-lg text-gray-800">{instructor.name}</h3>
                        <p className="text-cyan-600 font-medium text-sm">{instructor.profile?.specialization || 'Subject Specialist'}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-gray-600 ml-1">4.8</span>
                          <span className="text-xs text-gray-500 ml-2">{instructor.status}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {instructor.bio || 'Experienced educator passionate about teaching and helping students achieve their goals.'}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Experience:</span>
                        <span className="font-semibold text-gray-800">{instructor.profile.experience} years</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Education:</span>
                        <span className="font-semibold text-gray-800">{instructor.profile.educationLevel}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Location:</span>
                        <span className="font-semibold text-gray-800">{instructor.country?.toUpperCase()}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Subjects:</p>
                      <div className="flex flex-wrap gap-1">
                        {instructor.profile.subjects && instructor.profile.subjects.length > 0 ? (
                          instructor.profile.subjects.slice(0, 3).map((subject, index) => (
                            <span key={index} className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">
                              {subject}
                            </span>
                          ))
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            General Teaching
                          </span>
                        )}
                        {instructor.profile.subjects && instructor.profile.subjects.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{instructor.profile.subjects.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{instructor.followers || 0}</div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{instructor.courses?.length || 0}</div>
                        <div className="text-xs text-gray-500">Courses</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-600">${calculateHourlyRate(instructor.teachingfee)}/hr</div>
                        <div className="text-xs text-gray-500">Per Hour</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewProfile(instructor._id)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={() => handleEnrollNow(instructor._id)}
                        className="flex-1 bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors duration-200 text-sm font-medium"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Instructers;