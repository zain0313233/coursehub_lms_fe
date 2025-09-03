"use client";
import React from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";

const InvalidTokenScreen = ({ onRequestNewLink, onBackToLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-300 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-8 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Invalid Reset Link
              </h1>
              <p className="text-red-100 text-sm">
                This password reset link is invalid or has expired
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Link Expired or Invalid
              </h2>
              <p className="text-gray-600 mb-6">
                The password reset link you clicked is either invalid or has expired. 
                Reset links are only valid for 15 minutes for security reasons.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">What can you do?</h3>
                <ul className="text-sm text-gray-600 text-left space-y-1">
                  <li>• Request a new password reset link</li>
                  <li>• Check if you have a newer reset email</li>
                  <li>• Contact support if you continue having issues</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={onRequestNewLink}
                className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 rounded-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Request New Reset Link
              </button>

              <button
                onClick={onBackToLogin}
                className="w-full text-cyan-600 font-medium py-2 hover:text-cyan-500 transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvalidTokenScreen;