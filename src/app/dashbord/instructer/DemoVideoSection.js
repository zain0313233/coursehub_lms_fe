"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Play, Upload, Video, Eye, Calendar, Clock } from 'lucide-react';
import AddDemoVideoPopup from '@/component/popups/demovediopopup';
import axios from "axios";
import { useUser } from "@/context/UserContext";

const DemoVideoSection = () => {
  const [instructorData, setInstructorData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { user } = useUser();
  const recordSectionRef = useRef();

  const fetchData = async () => {
    try {
      if (!user?.id) return;
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${user.id}`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 200) {
        setInstructorData(response.data.userdata);
        console.log("User data fetched:", response.data.userdata);
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?.id]);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      
     
      setTimeout(() => {
        setIsUploading(false);
       
        fetchData();
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

  
  const generateThumbnail = (videoUrl) => {
    
    if (videoUrl && videoUrl.includes('cloudinary.com')) {
      return videoUrl.replace('/video/upload/', '/video/upload/so_0,w_400,h_225,c_fill/').replace('.mp4', '.jpg');
    }
  
    return "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop";
  };


  const hasVideo = instructorData?.videoUrl && instructorData?.videotitle;

  if (loading) {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2 flex items-center">
          <Video className="w-5 h-5 mr-2 text-blue-600" />
          Demo Video
        </h3>
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading demo video...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2 flex items-center">
        <Video className="w-5 h-5 mr-2 text-blue-600" />
        Demo Video
      </h3>
      
      {!hasVideo ? (
        <>
          <AddDemoVideoPopup onVideoUploaded={fetchData} />
        </>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="relative">
            {!isPlaying ? (
              <>
                <img
                  src={generateThumbnail(instructorData.videoUrl)}
                  alt={instructorData.videotitle}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group hover:bg-opacity-30 transition-all cursor-pointer">
                  <div 
                    className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all"
                    onClick={() => setIsPlaying(true)}
                  >
                    <Play className="w-8 h-8 text-blue-600" fill="currentColor" />
                  </div>
                </div>
              </>
            ) : (
              <video
                className="w-full h-64 object-cover"
                controls
                autoPlay
                onEnded={() => setIsPlaying(false)}
                onPause={() => {
                 
                }}
              >
                <source src={instructorData.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
           
          </div>
          
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {instructorData.videotitle}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {instructorData.vediodescription || "No description available"}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>0 views</span> 
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Uploaded {formatDate(instructorData.updatedAt)}</span>
                </div>
              </div>
              
              <label className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded cursor-pointer inline-flex items-center text-sm transition-colors">
                <Upload className="w-4 h-4 mr-2" />
                {isUploading ? 'Uploading...' : 'Replace Video'}
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