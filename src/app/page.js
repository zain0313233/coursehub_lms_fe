"use client";
import React, { useState } from "react";
import {
  User,
  GraduationCap,
  BookOpen,
  Upload,
  FileText,
  X,
  Check
} from "lucide-react";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Herosection from "@/component/Herosection";
import WhyChooseUs from "@/component/WhyChooseUs";
import ExploreCourses from "@/component/ExploreCourses";

const Login = () => {
  

  return (
   <>
   <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen">
    <Herosection />
    <WhyChooseUs />
    <ExploreCourses />
    </div>
    <Footer />
   </>
  );
};

export default Login;
