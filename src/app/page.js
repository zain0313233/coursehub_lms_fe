"use client";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Herosection from "@/component/Herosection";
import WhyChooseUs from "@/component/WhyChooseUs";
import ExploreCourses from "@/component/ExploreCourses";
import PopularInstructors from "@/component/PopularInstructors";
import ArticlesSection from "@/component/ArticlesSection";
import Contactus from "@/component/Contactus";



const Main = () => {
 

  return (
   <>
   <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <Herosection />
    <WhyChooseUs />
    <ExploreCourses />
    <PopularInstructors />
    <ArticlesSection />
    <Contactus />
    </div>
    <Footer />
   </>
  );
};

export default Main;
