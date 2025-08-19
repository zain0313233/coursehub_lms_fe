"use client";
import React, { useState } from 'react';
import { Play, Upload, Video, Eye, Calendar, Clock } from 'lucide-react';
import AddDemoVideoPopup from '@/component/popups/demovediopopup';

const DemoVideoSection = () => {
  const [demoVideo, setDemoVideo] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  
  const mockDemoVideo = {
    // id: 1,
    // title: "Introduction to React Hooks - Teaching Demo",
    // thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
    // duration: "8:45",
    // uploadDate: "2024-01-15",
    // views: 234,
    // description: "A comprehensive demo showing my teaching approach to React Hooks, covering useState and useEffect with practical examples."
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      
      setTimeout(() => {
        setDemoVideo({
          id: Date.now(),
          title: file.name.replace(/\.[^/.]+$/, ""),
          file: file,
          duration: "0:00",
          uploadDate: new Date().toISOString().split('T')[0],
          views: 0,
          description: "Recently uploaded demo video"
        });
        setIsUploading(false);
      }, 2000);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2 flex items-center">
        <Video className="w-5 h-5 mr-2 text-blue-600" />
        Demo Video
      </h3>
      
      {!demoVideo ? (
       
        <>
        <AddDemoVideoPopup/>
        </>
      ) : (
        
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="relative">
            <img
              src={mockDemoVideo.thumbnail}
              alt={mockDemoVideo.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group hover:bg-opacity-30 transition-all cursor-pointer">
              <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all">
                <Play className="w-8 h-8 text-blue-600" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
              {mockDemoVideo.duration}
            </div>
          </div>
          
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {mockDemoVideo.title}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {mockDemoVideo.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{mockDemoVideo.views} views</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Uploaded {formatDate(mockDemoVideo.uploadDate)}</span>
                </div>
              </div>
              
              <label className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded cursor-pointer inline-flex items-center text-sm transition-colors">
                <Upload className="w-4 h-4 mr-2" />
                Replace Video
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                  disabled={isUploading}
                />
              </label>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 text-sm text-gray-500">
        <p>
          <strong>Tip:</strong> A good demo video should be 5-10 minutes long and showcase your teaching methodology, 
          communication style, and subject matter expertise. Consider including a brief introduction and a sample lesson.
        </p>
      </div>
    </div>
  );
};

export default DemoVideoSection;