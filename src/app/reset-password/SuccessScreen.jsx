"use client";
import React from "react";
import { CheckCircle, ArrowLeft, Shield } from "lucide-react";

const SuccessScreen = ({ onBackToLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-300 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-8 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Password Reset Successful!
              </h1>
              <p className="text-green-100 text-sm">
                Your password has been updated successfully
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                All Set!
              </h2>
              <p className="text-gray-600 mb-6">
                Your password has been successfully updated. You can now sign in 
                to your CourseHub LMS account with your new password.
              </p>
              
              <div className="bg-cyan-50 rounded-xl p-4 mb-6 border border-cyan-200">
                <h3 className="font-semibold text-cyan-900 mb-2 flex items-center justify-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Tips
                </h3>
                <ul className="text-sm text-cyan-700 text-left space-y-1">
                  <li>• Keep your password secure and confidential</li>
                  <li>• Do not share your login credentials with anyone</li>
                  <li>• Consider using a password manager</li>
                  <li>• Sign out from public computers</li>
                </ul>
              </div>
            </div>

            <button
              onClick={onBackToLogin}
              className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 rounded-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue to Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;