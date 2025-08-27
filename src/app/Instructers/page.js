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
      <div className="min-h-screen bg-gray-50">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructors.map((instructor) => (
                <div key={instructor._id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative mb-4">
                        <div className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                          ⭐ 4.8
                        </div>
                        <img
                          src={instructor?.profileImageUrl || '/default-avatar.png'}
                          alt={instructor.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white"></div>
                      </div>
                      
                      <h3 className="font-bold text-xl text-gray-800 mb-1">{instructor.name}</h3>
                      <p className="text-teal-600 font-medium text-sm mb-1">{instructor.profile?.specialization || 'Subject Specialist'}</p>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-gray-600 text-xs">{instructor.profile?.educationLevel || 'Bachelor\'s Degree'}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600 text-xs">{instructor.country?.toUpperCase() || 'ONLINE'}</span>
                        <span className="text-gray-400">•</span>
                        <span className={`text-xs font-medium ${instructor.status === 'active' ? 'text-green-600' : 'text-orange-600'}`}>
                          {instructor.status || 'Available'}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed px-2">
                        {instructor.bio || `${instructor.profile?.experience || 5}+ years experience in ${instructor.profile?.specialization || 'education'} with expertise in modern teaching methodologies.`}
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap justify-center gap-2">
                        {instructor.profile?.subjects && instructor.profile.subjects.length > 0 ? (
                          instructor.profile.subjects.slice(0, 3).map((subject, index) => (
                            <span key={index} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium">
                              {subject}
                            </span>
                          ))
                        ) : (
                          <>
                            <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium">React</span>
                            <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium">Node.js</span>
                            <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium">Python</span>
                          </>
                        )}
                        {instructor.profile?.subjects && instructor.profile.subjects.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                            +{instructor.profile.subjects.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6 text-center">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center text-gray-600 mb-1">
                          <span className="text-lg">👥</span>
                        </div>
                        <div className="text-lg font-bold text-gray-800">{instructor.followers || Math.floor(Math.random() * 15000 + 5000).toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center text-gray-600 mb-1">
                          <span className="text-lg">📚</span>
                        </div>
                        <div className="text-lg font-bold text-gray-800">{instructor.courses?.length || 0}</div>
                        <div className="text-xs text-gray-500">Courses</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center text-gray-600 mb-1">
                          <span className="text-lg">💰</span>
                        </div>
                        <div className="text-lg font-bold text-teal-600">${calculateHourlyRate(instructor.teachingfee || instructor.profile?.experience || 5)}/hr</div>
                        <div className="text-xs text-gray-500">Per Hour</div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleViewProfile(instructor._id)}
                        className="flex-1 bg-gray-50 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm font-medium border border-gray-200"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={() => handleEnrollNow(instructor._id)}
                        className="flex-1 bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
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