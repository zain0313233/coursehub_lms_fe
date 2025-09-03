"use client";
import React, { useState } from "react";
import {
  User,
  GraduationCap,
  BookOpen,
  Mail,
  ArrowLeft,
  Send,
  CheckCircle,
  Shield
} from "lucide-react";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validator = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  
    if (errors.email) {
      setErrors({ ...errors, email: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/get-reset-link`, { email });
      if (response.status !== 200) {
        throw new Error("Failed to send reset email");
      }
     
      setIsEmailSent(true);
    } catch (error) {
      console.error("Failed to send reset email:", error);
      setErrors({ email: "Failed to send reset email. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToLogin = () => {
    
    // router.push("/login");
    window.location.href = "/login";
  };

  if (isEmailSent) {
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
                  onClick={handleBackToLogin}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 rounded-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Sign In
                </button>

                <button
                  onClick={() => setIsEmailSent(false)}
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-300 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Features */}
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
                Reset Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-700">
                  Password Securely
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Don not worry, it happens to the best of us. Enter your email 
                address and we windowll send you a secure link to reset your password.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Secure Process
                  </h4>
                  <p className="text-sm text-gray-600">
                    Your data is protected with encryption
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Quick Recovery
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get back to learning in minutes
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    24/7 Support
                  </h4>
                  <p className="text-sm text-gray-600">
                    We are here to help anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
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
                    onClick={handleBackToLogin}
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
      </div>
    </div>
  );
};

export default ForgetPassword;