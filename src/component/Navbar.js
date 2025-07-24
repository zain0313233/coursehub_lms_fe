"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-blue-900 flex text-white justify-between text-sm p-2 px-8 font-medium">
        <div className="flex items-center space-x-4">
          <p>zain.ali.cs.dev@gmail.com</p>
          <p>+92 333 1234567</p>
        </div>
        <div>
          <a
            href="/login"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            Login
          </a>
          <a
            href="/signup"
            className="ml-4 text-white hover:text-gray-200 transition-colors duration-200"
          >
            Register
          </a>
        </div>
      </div>

      <header className="bg-white shadow-sm border-b border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-900 font-medium text-sm uppercase tracking-wide hover:underline hover:text-gray-700 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/"
                className="text-gray-900 font-medium text-sm uppercase tracking-wide hover:underline hover:text-gray-700 transition-colors duration-200"
              >
                Pages
              </a>
              <a
                href="/"
                className="text-gray-900 font-medium text-sm uppercase tracking-wide hover:underline hover:text-gray-700 transition-colors duration-200"
              >
                Courses
              </a>
              <a
                href="/"
                className="text-gray-900 font-medium text-sm uppercase tracking-wide hover:underline hover:text-gray-700 transition-colors duration-200"
              >
                Teachers
              </a>
            </div>

            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-900 italic">
                CourseHub
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href="/"
                className="text-gray-900 font-medium text-sm uppercase tracking-wide hover:underline hover:text-gray-700 transition-colors duration-200"
              >
                News
              </a>
              <a
                href="/"
                className="text-gray-900 font-medium text-sm uppercase tracking-wide hover:underline hover:text-gray-700 transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="/"
                className="text-gray-900 font-medium text-sm uppercase tracking-wide hover:underline hover:text-gray-700 transition-colors duration-200"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4"></div>
          </div>
        </div>

        
      </header>
    </>
  );
};

export default Navbar;
