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
        <div className="absolute bottom-0 bg-cyan-300 right-0 px-8 py-8  z-10 shadow">
               <div className="absolute inset-0 bg-black/10 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        
       
        <div className="relative flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:scale-105">
         
          <div className="flex-shrink-0 p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all duration-300">
            <BookOpenText className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
          </div>
          
         
          <div className="flex-1">
            <p className="text-white text-lg md:text-xl font-semibold leading-tight">
              Explore our courses and start your
              <br />
              <span className="text-white/90 font-normal">learning journey today!</span>
            </p>
          </div>
          
          
          <div className="flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>
            

        </div>
    </div>
  )
}

export default Herosection