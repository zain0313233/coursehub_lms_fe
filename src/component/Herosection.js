import React from 'react'
import {BookOpenText,ArrowRight} from "lucide-react";

const Herosection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./Hero1.jpeg')",
          zIndex: 1
        }}
      ></div>
      <div className="relative w-full h-full flex items-center justify-center" style={{ zIndex: 3 }}>
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Welcome to CourseHub
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
            Your gateway to a world of knowledge and learning.
          </p>
        </div>
      </div>
        <div className="absolute inset-0 bg-black opacity-50" style={{ zIndex: 2 }}></div>
        <div className="absolute bottom-0 bg-cyan-300 right-0 px-20 py-10  z-10 shadow">
            <div className="flex items-center space-y-4 gap-2 text-white ">
                <BookOpenText />
                <p className="  text-justify  text-xl front-semibold md:text-base">
                
                Explore our courses and start your <br/>learning journey today!
            </p>
            <ArrowRight />
            </div>
            

        </div>
    </div>
  )
}

export default Herosection