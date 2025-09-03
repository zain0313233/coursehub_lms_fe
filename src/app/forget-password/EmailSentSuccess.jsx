"use client";
import React from "react";
import { Mail, ArrowLeft, CheckCircle, Shield } from "lucide-react";

const EmailSentSuccess = ({ email, onBackToLogin, onTryAgain }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-300 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Email Sent!
              </h1>
              <p className="text-gray-300 text-sm">
                Check your inbox for reset instructions
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>

          <div className="p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Check Your Email
              </h2>
              <p className="text-gray-600 mb-4">
                We have sent a password reset link to:
              </p>
              <p className="text-cyan-600 font-semibold text-lg bg-cyan-50 rounded-lg py-2 px-4">
                {email}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-cyan-600" />
                  What is next?
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Check your email inbox (and spam folder)</li>
                  <li>• Click the reset link in the email</li>
                  <li>• Create a new secure password</li>
                  <li>• Sign in with your new password</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={onBackToLogin}
                className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 rounded-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </button>

              <button
                onClick={onTryAgain}
                className="w-full text-cyan-600 font-medium py-2 hover:text-cyan-500 transition-colors text-sm"
              >
                Didn not receive email? Try again
              </button>
            </div>
          </div>

          <div className="bg-gray-50 px-8 lg:px-10 py-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">
                Link expires in 24 hours for security
              </p>
              <p className="text-xs text-gray-400">
                Need help?{" "}
                <a
                  href="mailto:zain.ali.cs.dev@gmail.com"
                  className="text-cyan-600 hover:underline"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSentSuccess;