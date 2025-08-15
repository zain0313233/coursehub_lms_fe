"use client";
import React, { useState } from "react";
import {
  User,
  GraduationCap,
  BookOpen,
  Mail,
  Lock,
  Eye,
  EyeOff
} from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser} from "../../context/UserContext";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { login } = useUser();
  const validator = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const loginresponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (loginresponse.status === 200 && loginresponse.data.success ) {
        const {user,accessToken,refreshToken}=loginresponse.data;
        login(user,accessToken,refreshToken);
        router.push("/");
      } else {
        throw new Error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setIsSubmitting(false);

      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-300 to-cyan-500 flex items-center justify-center p-4">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
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
                  Welcome to Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-700">
                    Learning Journey
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Access thousands of courses, learn from expert instructors,
                  and advance your career at your own pace.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      1000+ Courses
                    </h4>
                    <p className="text-sm text-gray-600">
                      Access diverse learning materials
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Expert Instructors
                    </h4>
                    <p className="text-sm text-gray-600">
                      Learn from industry professionals
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Flexible Learning
                    </h4>
                    <p className="text-sm text-gray-600">
                      Study at your own pace, anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto lg:max-w-lg">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold text-white mb-2">
                    CourseHub LMS
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Welcome back to your learning journey
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              <div className="p-8 lg:p-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Sign In
                  </h2>
                  <p className="text-gray-600">
                    Access your learning dashboard
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleinputChange}
                        type="email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        name="password"
                        value={formData.password}
                        onChange={handleinputChange}
                        type={showPassword ? "text" : "password"}
                        className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Remember me
                      </span>
                    </label>
                    <a
                      href="#"
                      className="text-sm font-medium text-cyan-600 hover:text-cyan-500 transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 rounded-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    <span>
                      {isSubmitting
                        ? "Sign In to Dashboard..."
                        : "Sign In to Dashboard"}
                    </span>
                  </button>
                </div>

                <div className="mt-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">
                        New to CourseHub?
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="/signup"
                      className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-200 hover:scale-[1.02]"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Create New Account
                    </a>
                  </div>
                </div>

                <div className="mt-8 lg:hidden grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
                  <div className="flex flex-col items-center space-y-1">
                    <BookOpen className="w-5 h-5 text-cyan-500" />
                    <span>1000+ Courses</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <GraduationCap className="w-5 h-5 text-gray-600" />
                    <span>Expert Teachers</span>
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
    </>
  );
};

export default Login;
