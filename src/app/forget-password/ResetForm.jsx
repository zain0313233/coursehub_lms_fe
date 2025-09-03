"use client";
import React from "react";
import { Mail, ArrowLeft, Send, Shield, User } from "lucide-react";

const ResetForm = ({ 
  email, 
  onEmailChange, 
  onSubmit, 
  isSubmitting, 
  errors, 
  onBackToLogin 
}) => {
  return (
    <div className="w-full max-w-md mx-auto lg:max-w-lg">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Password Recovery
            </h1>
            <p className="text-gray-300 text-sm">
              Enter your email to reset password
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        <div className="p-8 lg:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Forgot Password?
            </h2>
            <p className="text-gray-600">
              No worries! Enter your email and we will send you reset instructions.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={onEmailChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white ${
                    errors.email ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Enter your registered email"
                  required
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 rounded-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending Reset Link...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Reset Link
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Remember your password?
                </span>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={onBackToLogin}
                className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-200 hover:scale-[1.02]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </button>
            </div>
          </div>

          <div className="mt-8 lg:hidden grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
            <div className="flex flex-col items-center space-y-1">
              <Shield className="w-5 h-5 text-cyan-500" />
              <span>Secure</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Mail className="w-5 h-5 text-gray-600" />
              <span>Quick Reset</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <User className="w-5 h-5 text-cyan-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-8 lg:px-10 py-4 border-t border-gray-100">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Protected by reCAPTCHA. Google{" "}
              <a
                href="/privacy"
                className="text-cyan-600 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-cyan-600 hover:underline">
                Terms
              </a>{" "}
              apply.
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
  );
};

export default ResetForm;