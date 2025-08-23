import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios"
import { useUser } from "@/context/UserContext";
import { X, Upload, Video, Play, Calendar, FileText, Plus } from "lucide-react";

export default function AddDemoVideoPopup({ onRecordAdded }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoFile: null
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewVideo, setPreviewVideo] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      
      if (file.size > 100 * 1024 * 1024) {
        alert("File size must be less than 100MB");
        return;
      }

      setFormData((prev) => ({ ...prev, videoFile: file }));
      const reader = new FileReader();
      reader.onload = (e) => setPreviewVideo(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Video title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.videoFile) newErrors.videoFile = "Please upload a video file";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setUploadProgress(0);

    try {
      const formDataToSend = new FormData();
      
      formDataToSend.append("videotitle", formData.title); 
      formDataToSend.append("vediodescription", formData.description);  
      formDataToSend.append("video", formData.videoFile); 

      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${user.id}/video`,
        formDataToSend, 
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          }
        }
      );

      if (response.data.success) {
        resetForm();
        setIsOpen(false);
        alert("Demo video uploaded successfully!");
        if (onRecordAdded) {
          onRecordAdded();
        }
      } else {
        alert(response.data.message || "Failed to upload demo video");
      }
    } catch (error) {
      console.error("Error uploading demo video:", error);
      
    
      if (error.response) {
        alert(error.response.data.message || "Server error occurred");
      } else if (error.request) {
        alert("Network error. Please check your connection.");
      } else {
        alert("An error occurred while uploading the demo video");
      }
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      videoFile: null
    });
    setPreviewVideo(null);
    setErrors({});
    setUploadProgress(0);
  };

  const handleClose = () => {
    if (loading) {
      if (!confirm("Upload is in progress. Are you sure you want to cancel?")) {
        return;
      }
    }
    setIsOpen(false);
    resetForm();
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  if (!isOpen) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div className="flex flex-col items-center">
          <Video className="w-16 h-16 text-gray-400 mb-4" />
          <h4 className="text-lg font-medium text-gray-700 mb-2">
            Upload Your Teaching Demo
          </h4>
          <p className="text-gray-500 mb-6 max-w-md text-center">
          This helps students understand your
            approach before enrolling in your courses.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-4 px-6 rounded-xl hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group"
          >
            <Plus className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-semibold">Upload Teaching Demo</span>
          </button>
        </div>
      </div>
    );
  }

  return typeof document !== "undefined"
    ? createPortal(
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Video size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Upload Teaching Demo</h2>
                    <p className="text-cyan-100">
                      Showcase your teaching methodology and style
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  disabled={loading}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                >
                  <X size={24} />
                </button>
              </div>

             
              {loading && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Uploading video...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  {uploadProgress < 100 && (
                    <p className="text-xs text-cyan-100 mt-1">
                      Please don not close this window while uploading
                    </p>
                  )}
                </div>
              )}
            </div>

            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <div className="space-y-6">
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <FileText size={16} className="text-cyan-600" />
                      Video Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      disabled={loading}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="e.g., Introduction to React Hooks - Teaching Demo"
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title}
                      </p>
                    )}
                  </div>

                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <FileText size={16} className="text-cyan-600" />
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      disabled={loading}
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Describe your teaching approach, what topics you cover, and what students can expect to learn from this demo..."
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.description}
                      </p>
                    )}
                  </div>

                 
                  <div className="bg-cyan-50 rounded-xl p-4">
                    <h3 className="font-semibold text-cyan-700 mb-2">
                      🎥 Demo Video Guidelines
                    </h3>
                    <ul className="text-sm text-cyan-600 space-y-1">
                      <li>• Keep it between 5-15 minutes</li>
                      <li>• Show your teaching methodology clearly</li>
                      <li>• Include practical examples</li>
                      <li>• Ensure good audio and video quality</li>
                      <li>• Demonstrate student engagement techniques</li>
                    </ul>
                  </div>
                </div>

                
                <div className="space-y-6">
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Upload size={16} className="text-cyan-600" />
                      Demo Video
                    </label>

                    {!previewVideo ? (
                      <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-cyan-400 transition-colors">
                        <div className="space-y-4">
                          <Video size={48} className="mx-auto text-gray-400" />
                          <div className="text-sm text-gray-600">
                            <span className="text-cyan-600 font-semibold cursor-pointer">
                              Upload your demo video
                            </span>{" "}
                            or drag and drop
                          </div>
                          <p className="text-xs text-gray-500">
                            MP4, MOV, AVI up to 100MB
                          </p>
                        </div>
                        <input
                          type="file"
                          accept="video/*"
                          onChange={handleVideoChange}
                          disabled={loading}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                        />
                      </div>
                    ) : (
                      <div className="relative border-2 border-gray-200 rounded-xl overflow-hidden">
                        <video
                          src={previewVideo}
                          controls
                          className="w-full h-48 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewVideo(null);
                            setFormData((prev) => ({
                              ...prev,
                              videoFile: null
                            }));
                          }}
                          disabled={loading}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}

                    {errors.videoFile && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.videoFile}
                      </p>
                    )}
                  </div>

                  
                  {formData.videoFile && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Play size={16} className="text-cyan-600" />
                        Video Information
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>File Name:</span>
                          <span
                            className="truncate ml-2 max-w-[200px]"
                            title={formData.videoFile.name}
                          >
                            {formData.videoFile.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>File Size:</span>
                          <span>{formatFileSize(formData.videoFile.size)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Upload Date:</span>
                          <span>{new Date().toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  )}

                 
                  <div className="bg-amber-50 rounded-xl p-4">
                    <h3 className="font-semibold text-amber-700 mb-2">
                      💡 Pro Tips
                    </h3>
                    <ul className="text-sm text-amber-600 space-y-1">
                      <li>• Use good lighting and clear audio</li>
                      <li>• Start with a brief introduction</li>
                      <li>• Show your personality and teaching style</li>
                      <li>• End with a clear call-to-action</li>
                    </ul>
                  </div>
                </div>
              </div>

             
              <div className="flex gap-4 pt-6 border-t border-gray-200 mt-8">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={loading}
                  className="flex-1 py-3 px-6 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Uploading..." : "Cancel"}
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-xl font-semibold hover:from-cyan-700 hover:to-cyan-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {uploadProgress < 100 ? `Uploading... ${uploadProgress}%` : "Processing..."}
                    </>
                  ) : (
                    <>
                      <Upload size={16} />
                      Upload Demo Video
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}