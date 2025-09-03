"use client";
import React from "react";

const LoadingState = () => {
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
};

export default LoadingState;