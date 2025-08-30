"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import axios from "axios";
import { useParams } from "next/navigation";
import {
  User,
  Video,
  Star,
  Users,
  Eye,
  Calendar,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const InstructorProfile = () => {
  const [instructorData, setInstructorData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const params = useParams();
  const instructorId = params?.id;

  const fetchInstructorData = async () => {
    try {
      if (!instructorId) return;
      setLoading(true);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${instructorId}`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 200) {
        setInstructorData(response.data.userdata);
        console.log("Instructor data fetched:", response.data.userdata);
      }
    } catch (error) {
      console.error("Error fetching instructor data", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInstructorCourses = async () => {
    try {
      if (!instructorId) return;

      const courseResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/courses/teacher/${instructorId}?limit=3`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (courseResponse.status === 200 && courseResponse.data.success) {
        setCourses(courseResponse.data.data.courses);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchInstructorBlogs = async () => {
    try {
      if (!instructorId) return;

      const blogsResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/teacher/${instructorId}?limit=3`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (blogsResponse.status === 200 && blogsResponse.data.success) {
        setBlogs(blogsResponse.data.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    if (instructorId) {
      fetchInstructorData();
      fetchInstructorCourses();
      fetchInstructorBlogs();
    }
  }, [instructorId]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  const generateThumbnail = (videoUrl) => {
    if (videoUrl && videoUrl.includes("cloudinary.com")) {
      return videoUrl
        .replace("/video/upload/", "/video/upload/so_0,w_400,h_225,c_fill/")
        .replace(".mp4", ".jpg");
    }
    return "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop";
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading instructor profile...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!instructorData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Instructor Not Found
            </h2>
            <p className="text-gray-600">
              The instructor profile you're looking for doesn't exist.
            </p>
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
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=400&fit=crop"
              alt="Instructor Profile Background"
              style={{ zIndex: 1 }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <h1 className="text-4xl font-semibold text-gray-200 font-serif">
                Instructor Profile
              </h1>
              <p className="text-gray-100 font-serif">{instructorData?.name}</p>
            </div>
          </div>

          <div className="md:flex block w-full p-6 md:gap-6 items-start">
            <div className="md:w-[30%] w-full md:sticky top-6 self-start">
              <div className="bg-white shadow-md rounded-lg">
                <div className="p-6 bg-gray-800 text-white rounded-t-lg">
                  <h2 className="text-2xl font-semibold text-white text-center">
                    {instructorData?.name}
                  </h2>
                </div>

                <div className="relative p-5">
                  <div className="relative group">
                    {instructorData?.profileImageUrl ? (
                      <img
                        className="w-32 h-32 mx-auto object-cover rounded-full"
                        src={instructorData?.profileImageUrl}
                        alt="Instructor Profile"
                      />
                    ) : (
                      <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-8 py-2 text-center mt-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {instructorData?.name}
                  </h2>
                  <p className="text-gray-600 font-medium mb-1">
                    {instructorData?.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {instructorData?.profile?.specialization}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{instructorData?.status}</span>
                  </div>
                </div>

                <div className="px-8 pb-6">
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                      Statistics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {courses.length}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          Courses
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {blogs.length}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          Blogs
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Experience</span>
                        <span className="font-medium text-gray-900">
                          {instructorData?.profile?.experience}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-gray-600">Followers</span>
                        <span className="font-medium text-gray-900">
                          {instructorData?.followers || 0}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                      Contact Information
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">
                          {instructorData?.email}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">
                          {instructorData?.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">
                          {instructorData?.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[70%] w-full bg-white shadow-md rounded-lg">
              <div className="p-6 bg-gray-800 text-white rounded-t-lg md:mt-0 mt-6">
                <h2 className="text-2xl font-semibold">
                  Instructor Information
                </h2>
              </div>

              <div className="p-6">
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
                        <h5 className="text-gray-900 font-medium">
                          {instructorData.name}
                        </h5>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <h5 className="text-gray-900 font-medium">
                          {instructorData.email}
                        </h5>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address
                        </label>
                        <h5 className="text-gray-900 font-medium">
                          {instructorData.address}
                        </h5>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <h5 className="text-gray-900 font-medium">
                          {instructorData.phone}
                        </h5>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Specialization
                        </label>
                        <h5 className="text-gray-900 font-medium">
                          {instructorData.profile?.specialization}
                        </h5>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Experience
                        </label>
                        <h5 className="text-gray-900 font-medium">
                          {instructorData.profile?.experience}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                {instructorData?.videoUrl && instructorData?.videotitle && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2 flex items-center">
                      <Video className="w-5 h-5 mr-2 text-blue-600" />
                      Demo Video
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                      <div className="relative">
                        {!isPlaying ? (
                          <>
                            <img
                              src={generateThumbnail(instructorData.videoUrl)}
                              alt={instructorData.videotitle}
                              className="w-full h-64 object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop";
                              }}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group hover:bg-opacity-30 transition-all cursor-pointer">
                              <div
                                className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all"
                                onClick={() => setIsPlaying(true)}
                              >
                                <Video
                                  className="w-8 h-8 text-blue-600"
                                  fill="currentColor"
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="w-full max-w-full aspect-video">
                            <video
                              className="w-full h-full object-cover rounded-lg"
                              controls
                              autoPlay
                              onEnded={() => setIsPlaying(false)}
                            >
                              <source
                                src={instructorData.videoUrl}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {instructorData.videotitle}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {instructorData.vediodescription ||
                            "No description available"}
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            <span>0 views</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>
                              Uploaded {formatDate(instructorData.updatedAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {courses.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                      Courses by {instructorData.name.split(" ")[0]}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {courses.map((course) => (
                        <div
                          key={course._id}
                          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={
                                course.thumbnail || "/api/placeholder/400/200"
                              }
                              alt={course.title}
                              className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
                                {course.status}
                              </span>
                            </div>
                            <div className="absolute top-4 left-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-600 text-white">
                                ${course.price}
                              </span>
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700">
                                {course.code}
                              </span>
                              <span className="text-sm text-gray-500 font-medium">
                                {course.duration}
                              </span>
                            </div>

                            <h4 className="font-bold text-lg text-gray-900 mb-3 leading-tight">
                              {course.title}
                            </h4>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Users size={16} className="text-gray-500" />
                                <span className="text-sm font-medium text-gray-700">
                                  {course.students} students
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star
                                  size={14}
                                  className="text-yellow-500 fill-current"
                                />
                                <span className="text-sm font-medium">
                                  {course.rating}
                                </span>
                                <span className="text-sm text-gray-500">
                                  ({course.reviews})
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {blogs.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                      Recent Blogs
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {blogs.map((blog) => (
                        <div
                          key={blog._id}
                          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={blog.thumbnail}
                              alt={blog.title}
                              className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
                                {blog.category}
                              </span>
                            </div>
                          </div>

                          <div className="p-6">
                            <h4 className="font-bold text-lg text-gray-900 mb-3 leading-tight line-clamp-2">
                              {blog.title}
                            </h4>

                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>{formatDate(blog.createdAt)}</span>
                              <div className="flex items-center gap-1">
                                <Eye size={14} />
                                <span>
                                  {blog.views?.toLocaleString() || 0} views
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {courses.length === 0 && blogs.length === 0 && (
                  <div className="text-center py-12">
                    <div className="bg-gray-50 rounded-2xl p-12">
                      <Users size={48} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        No Content Available
                      </h3>
                      <p className="text-gray-500">
                        This instructor hasn't published any courses or blogs
                        yet.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <button className="bg-cyan-600 mt-6 mb-6 px-8 mr-6 text-center   justify-self-end text-white  py-2 rounded-lg hover:bg-cyan-700 transition flex items-center gap-2">
              Book Meeting
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InstructorProfile;
