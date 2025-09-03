"use client";
import React, { useState } from "react";
import axios from "axios";
import EmailSentSuccess from "./EmailSentSuccess";
import FeaturesSidebar from "./FeaturesSidebar";
import ResetForm from "./ResetForm";

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
    window.location.href = "/login";
  };

  const handleTryAgain = () => {
    setIsEmailSent(false);
  };

  if (isEmailSent) {
    return (
      <EmailSentSuccess 
        email={email}
        onBackToLogin={handleBackToLogin}
        onTryAgain={handleTryAgain}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-300 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
        <FeaturesSidebar />
        <ResetForm 
          email={email}
          onEmailChange={handleEmailChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          errors={errors}
          onBackToLogin={handleBackToLogin}
        />
      </div>
    </div>
  );
};

export default ForgetPassword;