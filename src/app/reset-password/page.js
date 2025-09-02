"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  GraduationCap,
  BookOpen,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  Shield,
  ArrowLeft,
  AlertCircle
} from "lucide-react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidToken, setIsValidToken] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    
    if (!token) {
      setIsValidToken(false);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const validator = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(formData.newPassword)) {
      newErrors.newPassword = "Password must contain uppercase, lowercase, number, and special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[@$!%*?&]/.test(password)) score++;
    
    if (score <= 2) return { strength: 'weak', color: 'bg-red-500', width: '33%' };
    if (score <= 4) return { strength: 'medium', color: 'bg-yellow-500', width: '66%' };
    return { strength: 'strong', color: 'bg-green-500', width: '100%' };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
        {
          token: token,
          newPassword: formData.newPassword
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 200 && response.data.success) {
        setIsSuccess(true);
      } else {
        throw new Error(response.data.message || "Password reset failed");
      }
    } catch (error) {
      console.error("Password reset failed:", error);
      if (error.response?.status === 400) {
        setIsValidToken(false);
      } else {
        setErrors({ 
          general: error.response?.data?.message || "Password reset failed. Please try again." 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

 
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-300 to-cyan-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Validating reset link...</p>
          </div>
        </div>
      </div>
    );
  }

 
  if (!isValidToken) {
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
                  onClick={() => router.push("/forget-password")}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 rounded-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Request New Reset Link
                </button>

                <button
                  onClick={handleBackToLogin}
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
  }

  
  if (isSuccess) {
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
                    <li>• Don't share your login credentials with anyone</li>
                    <li>• Consider using a password manager</li>
                    <li>• Sign out from public computers</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={handleBackToLogin}
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
  }

 
  const passwordStrength = getPasswordStrength(formData.newPassword);

  return (
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
                Create Your New
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-700">
                  Secure Password
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                You're almost done! Create a strong, secure password to protect 
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

        
        <div className="w-full max-w-md mx-auto lg:max-w-lg">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  Set New Password
                </h1>
                <p className="text-gray-300 text-sm">
                  Create a secure password for your account
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            <div className="p-8 lg:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Reset Password
                </h2>
                <p className="text-gray-600">
                  Enter your new secure password below
                </p>
              </div>

              {errors.general && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.general}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      type={showPassword ? "text" : "password"}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white ${
                        errors.newPassword ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Enter your new password"
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
                  
                 
                  {formData.newPassword && (
                    <div className="mt-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600">Password strength:</span>
                        <span className={`text-xs font-medium ${
                          passwordStrength.strength === 'weak' ? 'text-red-600' :
                          passwordStrength.strength === 'medium' ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {passwordStrength.strength.toUpperCase()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                          style={{ width: passwordStrength.width }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {errors.newPassword && (
                    <p className="mt-2 text-sm text-red-600">{errors.newPassword}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      type={showConfirmPassword ? "text" : "password"}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 bg-gray-50 focus:bg-white ${
                        errors.confirmPassword ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Confirm your new password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                    <Shield className="w-4 h-4 mr-2 text-cyan-600" />
                    Password Requirements
                  </h3>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className={formData.newPassword.length >= 8 ? 'text-green-600' : ''}>
                      • At least 8 characters long
                    </li>
                    <li className={/[a-z]/.test(formData.newPassword) ? 'text-green-600' : ''}>
                      • Contains lowercase letter
                    </li>
                    <li className={/[A-Z]/.test(formData.newPassword) ? 'text-green-600' : ''}>
                      • Contains uppercase letter
                    </li>
                    <li className={/\d/.test(formData.newPassword) ? 'text-green-600' : ''}>
                      • Contains a number
                    </li>
                    <li className={/[@$!%*?&]/.test(formData.newPassword) ? 'text-green-600' : ''}>
                      • Contains special character (@$!%*?&)
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 rounded-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Updating Password...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Update Password
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <button
                  onClick={handleBackToLogin}
                  className="text-cyan-600 font-medium py-2 hover:text-cyan-500 transition-colors text-sm flex items-center justify-center mx-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Sign In
                </button>
              </div>

              <div className="mt-8 lg:hidden grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
                <div className="flex flex-col items-center space-y-1">
                  <Shield className="w-5 h-5 text-cyan-500" />
                  <span>Secure</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Lock className="w-5 h-5 text-gray-600" />
                  <span>Encrypted</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <User className="w-5 h-5 text-cyan-500" />
                  <span>Protected</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-8 lg:px-10 py-4 border-t border-gray-100">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">
                  Your password is encrypted and secure
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

export default ResetPassword;