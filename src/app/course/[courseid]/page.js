"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import { 
  ArrowLeft, 
  Users, 
  Star, 
  Clock, 
  DollarSign, 
  BookOpen, 
  Edit,
  Trash2,
  Eye,
  Calendar,
  Award,
  BarChart3,
  User,
  Play,
  FileText,
  Video,
  Download,
  Lock
} from 'lucide-react';
import { useParams } from "next/navigation";
import axios from "axios";

const Course = () => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [error, setError] = useState(null);
  const params = useParams();
  const courseid = params?.courseid;

  const fetchCourse = async () => {
    if (!courseid) return;
    
    try {
      setLoading(true);
      setError(null);
    
      const courseResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${courseid}`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      if (courseResponse.status === 200 && courseResponse.data.success) {
        setCourse(courseResponse.data.coursedata);
        setLectures(courseResponse.data.lectures || []);
      }
    } catch (error) {
      console.error('Error fetching Course:', error);
      setError('Failed to load Course');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [courseid]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getContentTypeIcon = (contentType) => {
    switch (contentType?.toLowerCase()) {
      case 'video': return <Video size={16} className="text-cyan-600" />;
      case 'ppt': return <FileText size={16} className="text-cyan-600" />;
      case 'pdf': return <FileText size={16} className="text-cyan-600" />;
      default: return <Play size={16} className="text-cyan-600" />;
    }
  };

  const formatContentType = (contentType) => {
    switch (contentType?.toLowerCase()) {
      case 'ppt': return 'Presentation';
      case 'pdf': return 'Document';
      case 'video': return 'Video';
      default: return contentType || 'Content';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto mb-4"></div>
            <p className="text-gray-500 text-lg">Loading course details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center max-w-md">
          <div className="text-red-500 mb-4">
            <BookOpen size={48} className="mx-auto" />
          </div>
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button 
            onClick={fetchCourse}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Course not found</p>
        </div>
      </div>
    );
  }

  return (
   <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Course Details</h1>
              <p className="text-gray-600">Manage and view your course information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative">
                <img
                  src={course.thumbnail || '/api/placeholder/800/400'}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    ${course.price}
                  </span>
                </div>
                <div className="absolute top-6 right-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                    {course.code}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600 font-medium">{course.category}</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-cyan-600" />
                    <span className="text-sm text-gray-600">{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-cyan-600" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{course.rating} ({course.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 size={16} className="text-cyan-600" />
                    <span className="text-sm text-gray-600">{course.progress}% complete</span>
                  </div>
                </div>

                {course.description && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{course.description}</p>
                  </div>
                )}

                {course.prerequisites && course.prerequisites.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h3>
                    <div className="space-y-2">
                      {course.prerequisites.map((prereq, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{prereq}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {course.syllabus && course.syllabus.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Syllabus</h3>
                    <div className="space-y-3">
                      {course.syllabus.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                          <div className="bg-cyan-600 text-white text-sm font-semibold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {lectures && lectures.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Course Lectures</h3>
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                        {lectures.length} lectures
                      </span>
                    </div>
                    <div className="space-y-3">
                      {lectures.map((lecture, index) => (
                        <div key={lecture._id} className="border border-gray-200 rounded-lg p-4 hover:border-cyan-200 transition">
                          <div className="flex items-start gap-4">
                            <div className="bg-cyan-100 text-cyan-700 rounded-lg p-3 flex-shrink-0">
                              {getContentTypeIcon(lecture.contentType)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-gray-900 truncate">{lecture.title}</h4>
                                    {!lecture.isPreview && (
                                      <Lock size={14} className="text-gray-400" />
                                    )}
                                  </div>
                                  {lecture.description && (
                                    <p className="text-gray-600 text-sm mb-2">{lecture.description}</p>
                                  )}
                                  <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span className="bg-gray-100 px-2 py-1 rounded">
                                      Lecture {lecture.order}
                                    </span>
                                    <span>{formatContentType(lecture.contentType)}</span>
                                    {lecture.isPreview && (
                                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                                        Preview
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                    <Eye size={16} className="text-gray-600" />
                                  </button>
                                  <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                    <Download size={16} className="text-gray-600" />
                                  </button>
                                  <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                    <Edit size={16} className="text-gray-600" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-cyan-600 text-white py-3 px-4 rounded-lg hover:bg-cyan-700 transition flex items-center justify-center gap-2 font-medium">
                  <Edit size={16} />
                  Edit Course
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2 font-medium">
                  <Eye size={16} />
                  Preview Course
                </button>
                <button className="w-full bg-red-100 text-red-600 py-3 px-4 rounded-lg hover:bg-red-200 transition flex items-center justify-center gap-2 font-medium">
                  <Trash2 size={16} />
                  Delete Course
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Students</span>
                  <span className="font-semibold text-cyan-600">{course.students}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Lectures</span>
                  <span className="font-semibold text-cyan-600">{lectures.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Reviews</span>
                  <span className="font-semibold">{course.reviews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-cyan-600">{course.progress}%</span>
                </div>
              </div>
            </div>

            {course.teacher && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructor</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <User size={20} className="text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{course.teacher.name}</h4>
                    <p className="text-sm text-gray-600">{course.teacher.email}</p>
                  </div>
                </div>
                {course.teacher.profile?.bio && (
                  <p className="text-sm text-gray-600 mb-3">{course.teacher.profile.bio}</p>
                )}
                {course.teacher.profile?.experience && (
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-cyan-600" />
                    <span className="text-sm text-gray-600">{course.teacher.profile.experience} experience</span>
                  </div>
                )}
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-cyan-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Created</p>
                    <p className="text-xs text-gray-600">{new Date(course.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-cyan-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Last Updated</p>
                    <p className="text-xs text-gray-600">{new Date(course.updatedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
   </>
  );
};

export default Course;