"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  GraduationCap,
  BookOpen,
  Upload,
  FileText,
  X,
  Check,
  Eye,
  EyeOff,
  Calendar,
  Globe,
  ArrowRight
} from "lucide-react";
const axios = require("axios");
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState("student");
  const [cvFile, setCvFile] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    dateOfBirth: "",
    password: "",
    role: "student",
    educationLevel: "",
    learningGoals: "",
    bio: "",
    experience: "",
    subjects: "",
  });
  const router = useRouter();

  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        address: formData.address,
        dateOfBirth: formData.dateOfBirth,
        password: formData.password,
        role: selectedRole,
        educationLevel: formData.educationLevel,
        bio: formData.bio,
        status:formData.status 
      };

      if (selectedRole === 'teacher') {
        payload.experience = formData.experience;
        payload.subjects = formData.subjects;
        payload.batch=formData.batch;
      } else {
        payload.learningGoals = formData.learningGoals;
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
        payload,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status !== 200 && response.status !== 201) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = response.data;

      if (response.status === 201) {
        if (data.user.role === 'student') {
          router.push('/dashbord/student');
        } else if (data.user.role === 'teacher') {
          router.push('/dashbord/instructer');
        }
      }
      console.log("Success:", data);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating your account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRoleChange = (event) => {
    const newRole = event.target.value;
    setSelectedRole(newRole);
    setformData({
      ...formData,
      role: newRole
    });
  };

  const handleFileChange = (file) => {
    if (file && file.type === "application/pdf" && file.size <= 2 * 1024 * 1024) {
      setCvFile(file);
      setUploadStatus("success");
    } else {
      setUploadStatus("error");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const removeFile = () => {
    setCvFile(null);
    setUploadStatus("idle");
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-300 to-cyan-500 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-start">
          
          <div className="hidden lg:flex flex-col justify-center space-y-8 pr-12 sticky top-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">CourseHub LMS</h3>
                  <p className="text-gray-600">Learn & Grow</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Start Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-700">
                    Learning Adventure
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands of learners and expert instructors. Create your account and begin your journey today.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Student or Teacher</h4>
                    <p className="text-sm text-gray-600">Choose your learning path</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Experience</h4>
                    <p className="text-sm text-gray-600">Tailored to your goals</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Access</h4>
                    <p className="text-sm text-gray-600">Start learning immediately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              
              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold text-white mb-2">Join CourseHub LMS</h1>
                  <p className="text-gray-300 text-sm">Create your account and start learning</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              <div className="p-8 lg:p-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
                  <p className="text-gray-600">Fill in your details to get started</p>
                </div>

                <form className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                        name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleinputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                        name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleinputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                        name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleinputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select 
                        name="country"
                        value={formData.country}
                        onChange={handleinputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white appearance-none">
                          <option value="">Select your country</option>
                          <option value="us">United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                          <option value="au">Australia</option>
                          <option value="pk">Pakistan</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City & Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleinputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Enter city and address"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                        name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleinputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                        name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleinputChange}
                          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Create password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                        name="password"
                          type={showConfirmPassword ? "text" : "password"}
                          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Confirm password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-cyan-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2 text-cyan-600" />
                      Select Your Role
                    </h3>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          onChange={handleRoleChange}
                          type="radio"
                          name="role"
                          value="student"
                          className="w-4 h-4 text-cyan-600 border-gray-300 focus:ring-cyan-500"
                          checked={selectedRole === "student"}
                        />
                        <span className="ml-3 text-sm font-medium text-gray-700">Student</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          onChange={handleRoleChange}
                          type="radio"
                          name="role"
                          value="teacher"
                          className="w-4 h-4 text-cyan-600 border-gray-300 focus:ring-cyan-500"
                          checked={selectedRole === "teacher"}
                        />
                        <span className="ml-3 text-sm font-medium text-gray-700">Teacher</span>
                      </label>
                    </div>
                  </div>

                  {selectedRole === "teacher" && (
                    <div className="space-y-6 p-6 bg-gradient-to-r from-cyan-50 to-gray-50 rounded-xl border border-cyan-200">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2 text-cyan-600" />
                        Teacher Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Education Level
                          </label>
                          <select 
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleinputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white" required>
                            <option value="">Select education level</option>
                            <option value="PhD">PhD</option>
                            <option value="MS">Masters</option>
                            <option value="BS">Bachelors</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Years of Experience
                          </label>
                          <input
                          name="experience"
                          value={formData.experience}
                          onChange={handleinputChange}
                          
                            type="number"
                            min="0"
                            placeholder="e.g. 5"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Subjects You Can Teach
                        </label>
                        <input
                        name="subjects"
                          value={formData.subjects}
                          onChange={handleinputChange}
                          type="text"
                          placeholder="e.g. Mathematics, Physics, Computer Science"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white"
                          required
                        />
                      </div>
                       <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Enter Your Batch
                        </label>
                        <input
                        name="batch"
                          value={formData.batch}
                          onChange={handleinputChange}
                          type="text"
                          placeholder="e.g. Faculty 2018"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white"
                          required
                        />
                      </div>
                       <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Current Status
                        </label>
                        <input
                        name="status"
                          value={formData.status}
                          onChange={handleinputChange}
                          type="text"
                          placeholder="e.g. Active Instructer"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Short Bio
                        </label>
                        <textarea
                          rows="3"
                          name="bio"
                          value={formData.bio}
                          onChange={handleinputChange}
                          placeholder="Tell us about your teaching experience and passion..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white resize-none"
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload CV / Resume
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <p className="text-xs text-gray-600 mb-3">PDF format only, maximum 2MB</p>
                        
                        {!cvFile ? (
                          <div
                            className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 cursor-pointer hover:border-cyan-400 hover:bg-cyan-50/30 ${
                              isDragOver
                                ? "border-cyan-400 bg-cyan-50/50"
                                : uploadStatus === "error"
                                ? "border-red-300 bg-red-50/30"
                                : "border-gray-300 bg-gray-50/30"
                            }`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                          >
                            <input
                              type="file"
                              accept=".pdf"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              onChange={(e) => handleFileChange(e.target.files[0])}
                              required
                            />

                            <div className="flex flex-col items-center space-y-3">
                              <div className={`p-3 rounded-full ${isDragOver ? "bg-cyan-100" : "bg-gray-100"}`}>
                                <Upload className={`w-6 h-6 ${isDragOver ? "text-cyan-600" : "text-gray-400"}`} />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-700">
                                  {isDragOver ? "Drop your CV here" : "Upload your CV"}
                                </p>
                                <p className="text-xs text-gray-500">
                                  Drag and drop or <span className="text-cyan-600 font-medium">browse files</span>
                                </p>
                              </div>
                              {uploadStatus === "error" && (
                                <p className="text-xs text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                                  Please select a valid PDF file under 2MB
                                </p>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                  <FileText className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{cvFile.name}</p>
                                  <p className="text-xs text-gray-500">{formatFileSize(cvFile.size)} • PDF</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1 text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                  <Check className="w-3 h-3" />
                                  <span className="text-xs font-medium">Uploaded</span>
                                </div>
                                <button onClick={removeFile} className="p-1 hover:bg-red-100 rounded-full transition-colors" type="button">
                                  <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedRole === "student" && (
                    <div className="space-y-6 p-6 bg-gradient-to-r from-gray-50 to-cyan-50 rounded-xl border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-cyan-600" />
                        Student Information
                      </h3>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Current Education Level
                        </label>
                        <select 
                        name="educationLevel"
                        value={formData.educationLevel}
                          onChange={handleinputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white" required>
                          <option value="">Select your current level</option>
                          <option value="Matric">Matric</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Undergraduate">Undergraduate</option>
                          <option value="Graduate">Graduate</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Learning Goals
                        </label>
                        <input
                        name="learningGoals"
                        value={formData.learningGoals}
                          onChange={handleinputChange}
                          type="text"
                          placeholder="e.g. Prepare for CSS exam, learn Python programming"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Short Bio
                        </label>
                        <textarea
                        name="bio"
                        value={formData.bio}
                          onChange={handleinputChange}
                          rows="3"
                          placeholder="Write a short introduction about yourself and your interests..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-white resize-none"
                        ></textarea>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500" 
                      required 
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      I agree to the 
                      <a href="/terms" className="text-cyan-600 hover:underline font-medium ml-1 mr-1">Terms of Service</a>
                      and
                      <a href="/privacy" className="text-cyan-600 hover:underline font-medium ml-1">Privacy Policy</a>
                    </span>
                  </div>

                  <button
                  
                disabled={isSubmitting}
                  onClick={handleSubmit}
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 rounded-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                   <span>
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </span>

                  </button>
                </form>

                <div className="mt-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Already have an account?</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="/login"
                      className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-200 hover:scale-[1.02]"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Sign In Instead
                    </a>
                  </div>
                </div>

                <div className="mt-8 lg:hidden grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
                  <div className="flex flex-col items-center space-y-1">
                    <User className="w-5 h-5 text-cyan-500" />
                    <span>Easy Setup</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <GraduationCap className="w-5 h-5 text-gray-600" />
                    <span>Expert Teachers</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <BookOpen className="w-5 h-5 text-cyan-500" />
                    <span>Instant Access</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-8 lg:px-10 py-4 border-t border-gray-100">
                <div className="text-center space-y-2">
                  <p className="text-xs text-gray-500">
                    Protected by reCAPTCHA. Google{" "}
                    <a href="/privacy" className="text-cyan-600 hover:underline">Privacy Policy</a>
                    {" "}and{" "}
                    <a href="/terms" className="text-cyan-600 hover:underline">Terms</a> apply.
                  </p>
                  <p className="text-xs text-gray-400">
                    Need help?{" "}
                    <a href="mailto:zain.ali.cs.dev@gmail.com" className="text-cyan-600 hover:underline">
                      Contact Support
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;