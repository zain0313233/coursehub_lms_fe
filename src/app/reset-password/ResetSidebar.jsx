"use client";
import React from "react";
import { User, BookOpen, Lock, Shield } from "lucide-react";

const ResetSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center space-y-8 pr-12">
      <div className="space-y-6">
        <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              CourseHub LMS
            </h3>
            <p className="text-gray-600">Learn & Grow</p>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Create Your New
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-700">
              Secure Password
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You are almost done! Create a strong, secure password to protect 
            your account and continue your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                Secure & Encrypted
              </h4>
              <p className="text-sm text-gray-600">
                Your data is protected with industry-standard encryption
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                Strong Password
              </h4>
              <p className="text-sm text-gray-600">
                Use a mix of letters, numbers, and symbols
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                Account Security
              </h4>
              <p className="text-sm text-gray-600">
                Keep your learning progress safe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetSidebar;