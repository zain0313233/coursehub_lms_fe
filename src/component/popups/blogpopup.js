import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Upload, FileText, Eye, Calendar, Tag, Plus } from "lucide-react";

export default function AddBlogPopup({ onRecordAdded }) {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    thumbnail: null,
    status: "Draft"
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const categories = [
    "Tutorial",
    "News",
    "Technology",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Machine Learning",
    "UI/UX Design",
    "DevOps",
    "Programming",
    "Career",
    "Tips & Tricks"
  ];

  const statusOptions = [
    { value: "Draft", label: "Draft" },
    { value: "Published", label: "Published" },
    { value: "Archived", label: "Archived" }
  ];

  useEffect(
    () => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }

      return () => {
        document.body.style.overflow = "unset";
      };
    },
    [isOpen]
  );

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, thumbnail: file }));
      const reader = new FileReader();
      reader.onload = e => setPreviewImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!formData.category) newErrors.category = "Category is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const formDataToSend = new FormData();

   
      formDataToSend.append("title", formData.title);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("status", formData.status);

      if (formData.thumbnail) {
        formDataToSend.append("thumbnail", formData.thumbnail);
      }

     
      const response = await fetch("/api/blog/create", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        resetForm();
        setIsOpen(false);
        alert("Blog post created successfully!");
        if (onRecordAdded) {
          onRecordAdded();
        }
      } else {
        alert(result.message || "Failed to create blog post");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("An error occurred while creating the blog post");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      category: "",
      thumbnail: null,
      status: "Draft"
    });
    setPreviewImage(null);
    setErrors({});
  };

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-3.5 px-4 rounded-xl hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group"
      >
        <Plus className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
        <span className="font-semibold">Create New Blog Post</span>
      </button>
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
                    <FileText size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Create New Blog Post</h2>
                    <p className="text-cyan-100">
                      Share your knowledge with the world
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <FileText size={16} className="text-cyan-600" />
                      Blog Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors"
                      placeholder="10 Essential React Hooks Every Developer Should Know"
                    />
                    {errors.title &&
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title}
                      </p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Tag size={16} className="text-cyan-600" />
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors"
                      >
                        <option value="">Select Category</option>
                        {categories.map(cat =>
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        )}
                      </select>
                      {errors.category &&
                        <p className="text-red-500 text-sm mt-1">
                          {errors.category}
                        </p>}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Eye size={16} className="text-cyan-600" />
                        Status
                      </label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors"
                      >
                        {statusOptions.map(option =>
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <FileText size={16} className="text-cyan-600" />
                      Content
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows="8"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors resize-none"
                      placeholder="Write your blog content here. You can use markdown formatting..."
                    />
                    {errors.content &&
                      <p className="text-red-500 text-sm mt-1">
                        {errors.content}
                      </p>}
                  </div>
                </div>

               
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Upload size={16} className="text-cyan-600" />
                      Featured Image
                    </label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-cyan-400 transition-colors">
                      {previewImage
                        ? <div className="relative">
                            <img
                              src={previewImage}
                              alt="Preview"
                              className="w-full h-48 object-cover rounded-lg mb-3"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setPreviewImage(null);
                                setFormData(prev => ({
                                  ...prev,
                                  thumbnail: null
                                }));
                              }}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        : <div className="space-y-3">
                            <Upload
                              size={48}
                              className="mx-auto text-gray-400"
                            />
                            <div className="text-sm text-gray-600">
                              <span className="text-cyan-600 font-semibold cursor-pointer">
                                Upload an image
                              </span>{" "}
                              or drag and drop
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Calendar size={16} className="text-cyan-600" />
                      Publishing Info
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Created:</span>
                        <span>
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${formData.status ===
                          "Published"
                            ? "bg-green-100 text-green-700"
                            : formData.status === "Draft"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"}`}
                        >
                          {formData.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Category:</span>
                        <span>
                          {formData.category || "Not selected"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded-xl p-4">
                    <h3 className="font-semibold text-cyan-700 mb-2">
                      💡 Writing Tips
                    </h3>
                    <ul className="text-sm text-cyan-600 space-y-1">
                      <li>• Use clear, engaging headlines</li>
                      <li>• Add relevant images and examples</li>
                      <li>• Break content into readable sections</li>
                      <li>• Include actionable takeaways</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-200 mt-8">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 px-6 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-xl font-semibold hover:from-cyan-700 hover:to-cyan-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                >
                  {loading ? "Publishing..." : "Publish Blog Post"}
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}
