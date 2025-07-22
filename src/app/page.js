import React from "react";
import { User, Mail, Phone, MapPin, Lock, GraduationCap, BookOpen, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white   w-[900px] rounded-2xl shadow-2xl shadow-gray-600">
        <div className="w-full rounded-t-2xl bg-gradient-to-br from-gray-600 to-gray-700 p-8 text-white flex flex-col justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">CourseHub LMS</h1>
              <p className="text-indigo-200 mb-8">Join our learning community and unlock your potential</p>
              
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
              <a href="/privacy" class="text-blue-600 hover:underline ml-1 mr-1">
                Privacy Policy
              </a>
              and
              <a href="/terms" class="text-blue-600 hover:underline ml-1 mr-1">
                Terms of Service
              </a>
              apply.
            </p>
          </div>

          <div class="pt-4 border-t border-gray-100">
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
