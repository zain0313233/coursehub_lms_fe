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
  Check
} from "lucide-react";

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState("student");
  const [cvFile, setCvFile] = useState(null);
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, uploading, success, error

  const handleFileChange = (file) => {
    if (
      file &&
      file.type === "application/pdf" &&
      file.size <= 2 * 1024 * 1024
    ) {
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
    <div className="flex flex-col items-center justify-center min-h-screen mt-7 mb-9">
      <form className="bg-white   w-[900px] rounded-2xl shadow-2xl shadow-gray-600">
        <div className="w-full rounded-t-2xl bg-gradient-to-br from-gray-600 to-gray-700 p-8 text-white flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">CourseHub LMS</h1>
            <p className="text-indigo-200 mb-8">
              Join our learning community and unlock your potential
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-indigo-200" />
                <span>Access thousands of courses</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 text-indigo-200" />
                <span>Get certified by expert instructors</span>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-6 h-6 text-indigo-200" />
                <span>Learn at your own pace</span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[30px] font-bold mt-9 mb-2 px-9">Create Account</h1>
        <div className="mb-6 p-8 grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phono
            </label>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>

            <select className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors appearance-none bg-white">
              <option value="">Select your country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City,Address
            </label>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors appearance-none bg-white"
              placeholder="Enter your city and address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                required
              />
              <span className="ml-2 text-sm text-gray-700">
                I agree to the terms and conditions
              </span>
            </label>
          </div>
        </div>
        <div className="px-8 mb-8">
          <div className="w-full bg-gray-600 text-white text-center py-2 px-4  rounded hover:bg-gary-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Select Your Role
          </div>

          <div className="mt-6">
            <label className="inline-flex items-center mr-4">
              <input
                onChange={handleRoleChange}
                type="radio"
                name="role"
                value="student"
                className="form-radio h-5 w-5 text-blue-600"
                checked={selectedRole === "student"}
              />
              <span className="ml-2 text-sm text-gray-700">Student</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                onChange={handleRoleChange}
                type="radio"
                name="role"
                value="teacher"
                className="form-radio h-5 w-5 text-blue-600"
                checked={selectedRole === "teacher"}
              />
              <span className="ml-2 text-sm text-gray-700">Teacher</span>
            </label>
          </div>
          {selectedRole === "teacher" && (
            <>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Education Level
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                >
                  <option value="">Select</option>
                  <option value="PhD">PhD</option>
                  <option value="MS">MS</option>
                  <option value="BS">BS</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 5"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subjects You Can Teach
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mathematics, Physics"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short Bio
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your teaching style or passion"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                ></textarea>
              </div>
              <div className="mt-4">
                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      Upload CV / Resume
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-gray-600">
                      PDF format only, maximum 2MB
                    </p>
                  </div>
                  {!cvFile ? (
                    <div
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer group hover:border-blue-400 hover:bg-blue-50/30 ${
                        isDragOver
                          ? "border-blue-400 bg-blue-50/50"
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

                      <div className="flex flex-col items-center space-y-4">
                        <div
                          className={`p-4 rounded-full transition-colors ${
                            isDragOver
                              ? "bg-blue-100"
                              : "bg-gray-100 group-hover:bg-blue-100"
                          }`}
                        >
                          <Upload
                            className={`w-8 h-8 transition-colors ${
                              isDragOver
                                ? "text-blue-600"
                                : "text-gray-400 group-hover:text-blue-600"
                            }`}
                          />
                        </div>

                        <div className="space-y-2">
                          <p className="text-lg font-medium text-gray-700">
                            {isDragOver
                              ? "Drop your CV here"
                              : "Upload your CV"}
                          </p>
                          <p className="text-sm text-gray-500">
                            Drag and drop your file here, or{" "}
                            <span className="text-blue-600 font-medium hover:text-blue-700">
                              browse files
                            </span>
                          </p>
                        </div>

                        {uploadStatus === "error" && (
                          <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
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
                            <FileText className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {cvFile.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(cvFile.size)} • PDF
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-green-600 bg-green-100 px-2 py-1 rounded-full">
                            <Check className="w-3 h-3" />
                            <span className="text-xs font-medium">
                              Uploaded
                            </span>
                          </div>
                          <button
                            onClick={removeFile}
                            className="p-1 hover:bg-red-100 rounded-full transition-colors"
                            type="button"
                          >
                            <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {selectedRole === "student" && (
            <>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Education Level
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                >
                  <option value="">Select</option>
                  <option value="Matric">Matric</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Learning Goals
                </label>
                <input
                  type="text"
                  placeholder="e.g. Prepare for CSS, learn Python"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short Bio
                </label>
                <textarea
                  rows="3"
                  placeholder="Write a short intro about yourself"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                ></textarea>
              </div>
            </>
          )}
        </div>
        <div className="px-8 mb-8">
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 px-4  rounded hover:bg-gary-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Sign Up
          </button>
        </div>
        <div class="mt-8 space-y-4 text-center">
          <div class="pb-4 border-b border-gray-200">
            <p class="text-sm text-gray-600">
              Already have an account?
              <a
                href="/login"
                class="text-blue-600 hover:underline font-medium ml-1"
              >
                Log In
              </a>
            </p>
          </div>

          <div class="space-y-3">
            <p class="text-xs text-gray-500 leading-relaxed">
              By signing up, you agree to our
              <a href="/terms" class="text-blue-600 hover:underline ml-1 mr-1">
                Terms of Service
              </a>
              and
              <a href="/privacy" class="text-blue-600 hover:underline ml-1">
                Privacy Policy
              </a>
              .
            </p>

            <p class="text-xs text-gray-500 leading-relaxed">
              This site is protected by reCAPTCHA and the Google
              <a
                href="/privacy"
                class="text-blue-600 hover:underline ml-1 mr-1"
              >
                Privacy Policy
              </a>
              and
              <a href="/terms" class="text-blue-600 hover:underline ml-1 mr-1">
                Terms of Service
              </a>
              apply.
            </p>
          </div>

          <div class="pt-4 border-t border-gray-100 mb-7 ">
            <p class="text-xs text-gray-400">
              Questions? Contact us at
              <a
                href="mailto:zain.ali.cs.dev@gmail.com"
                class="text-blue-600 hover:underline ml-1"
              >
                zain.ali.cs.dev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
