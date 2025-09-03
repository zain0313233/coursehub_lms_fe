"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoadingState from "./LoadingState";
import InvalidTokenScreen from "./InvalidTokenScreen";
import SuccessScreen from "./SuccessScreen";
import ResetSidebar from "./ResetSidebar";
import PasswordForm from "./PasswordForm";

const ResetPassword = ({ token }) => {
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

  const handleRequestNewLink = () => {
    router.push("/forget-password");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  if (isLoading) {
    return <LoadingState />;
  }

 
  if (!isValidToken) {
    return (
      <InvalidTokenScreen 
        onRequestNewLink={handleRequestNewLink}
        onBackToLogin={handleBackToLogin}
      />
    );
  }

  
  if (isSuccess) {
    return <SuccessScreen onBackToLogin={handleBackToLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-300 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
       
        <ResetSidebar />
        <PasswordForm 
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          showPassword={showPassword}
          onTogglePassword={handleTogglePassword}
          showConfirmPassword={showConfirmPassword}
          onToggleConfirmPassword={handleToggleConfirmPassword}
          isSubmitting={isSubmitting}
          errors={errors}
          onBackToLogin={handleBackToLogin}
          getPasswordStrength={getPasswordStrength}
        />
      </div>
    </div>
  );
};

export default ResetPassword;