import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Upload, BookOpen, User, DollarSign, Clock, Tag, FileText, List, CheckCircle } from 'lucide-react';
import { useUser } from "@/context/UserContext";
import axios from "axios";

export default function AddCoursePopup({ onCourseAdded }) {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useUser();
  
  const [formData, setFormData] = useState({
    title: '',
    code: '',
    duration: '',
    category: '',
    price: '',
    teacher: user?.id || '', 
    description: '',
    status: 'Draft',
    syllabus: [''],
    prerequisites: [''],
    thumbnail: null
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const categories = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'UI/UX Design',
    'DevOps',
    'Cybersecurity',
    'Database',
    'Programming Languages',
    'Software Engineering'
  ];

  const statusOptions = [
    { value: 'Draft', label: 'Draft' },
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' }
  ];

  useEffect(() => {
    if (isOpen) {
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

 
  useEffect(() => {
    if (user?.id) {
      setFormData(prev => ({
        ...prev,
        teacherid: user.id
      }));
    }
  }, [user]);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, thumbnail: file }));
      const reader = new FileReader();
      reader.onload = (e) => setPreviewImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleArrayChange = (index, value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (index, field) => {
    if (formData[field].length > 1) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index)
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.code.trim()) newErrors.code = 'Course code is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.price.trim()) newErrors.price = 'Price is required';
    if (!formData.teacherid) newErrors.teacherid = 'Teacher is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      const formDataToSend = new FormData();
      
      Object.keys(formData).forEach(key => {
        if (key === 'syllabus' || key === 'prerequisites') {
          formDataToSend.append(key, JSON.stringify(formData[key].filter(item => item.trim())));
        } else if (key === 'thumbnail' && formData[key]) {
          formDataToSend.append(key, formData[key]);
        } else if (key !== 'thumbnail') {
          formDataToSend.append(key, formData[key]);
        }
      });

      
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/courses/create`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data" 
          }
        }
      );
      
      
      if (response.data.success) {
        resetForm();
        setIsOpen(false);
        alert('Course created successfully!');
         if (onCourseAdded) {
          onCourseAdded();
        }
      } else {
        alert(response.data.message || 'Failed to create course');
      }
    } catch (error) {
      console.error('Error creating course:', error);
      alert(error.response?.data?.message || 'An error occurred while creating the course');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      code: '',
      duration: '',
      category: '',
      price: '',
      teacherid: user?.id || '',
      description: '',
      status: 'Draft',
      syllabus: [''],
      prerequisites: [''],
      thumbnail: null
    });
    setPreviewImage(null);
    setErrors({});
  };

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  // Modal content component
  const ModalContent = () => (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ zIndex: 9999 }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <BookOpen size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Create New Course</h2>
                <p className="text-cyan-100">Build something amazing for your students</p>
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
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <BookOpen size={16} className="text-cyan-600" />
                  Course Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors"
                  placeholder="Complete React.js Bootcamp 2024"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Tag size={16} className="text-cyan-600" />
                    Course Code
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors"
                    placeholder="WD101"
                  />
                  {errors.code && <p className="text-red-500 text-sm mt-1">{errors.code}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Clock size={16} className="text-cyan-600" />
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors"
                    placeholder="6 Months"
                  />
                  {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <List size={16} className="text-cyan-600" />
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors"
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <DollarSign size={16} className="text-cyan-600" />
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors"
                    placeholder="$149.99"
                  />
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <CheckCircle size={16} className="text-cyan-600" />
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors"
                  >
                    {statusOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Upload size={16} className="text-cyan-600" />
                  Course Thumbnail
                </label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-cyan-400 transition-colors">
                  {previewImage ? (
                    <div className="relative">
                      <img src={previewImage} alt="Preview" className="w-full h-32 object-cover rounded-lg mb-3" />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewImage(null);
                          setFormData(prev => ({ ...prev, thumbnail: null }));
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Upload size={32} className="mx-auto text-gray-400" />
                      <div className="text-sm text-gray-600">
                        <span className="text-cyan-600 font-semibold cursor-pointer">Upload an image</span> or drag and drop
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
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
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-0 transition-colors resize-none"
                  placeholder="Describe what students will learn in this course..."
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <List size={16} className="text-cyan-600" />
                Syllabus Topics
              </label>
              <div className="space-y-2">
                {formData.syllabus.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange(index, e.target.value, 'syllabus')}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:border-cyan-500 focus:ring-0 text-sm"
                      placeholder={`Topic ${index + 1}`}
                    />
                    {formData.syllabus.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem(index, 'syllabus')}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('syllabus')}
                  className="w-full p-2 text-cyan-600 border-2 border-dashed border-cyan-300 rounded-lg hover:border-cyan-400 hover:bg-cyan-50 transition-colors text-sm"
                >
                  + Add Topic
                </button>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <CheckCircle size={16} className="text-cyan-600" />
                Prerequisites
              </label>
              <div className="space-y-2">
                {formData.prerequisites.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange(index, e.target.value, 'prerequisites')}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:border-cyan-500 focus:ring-0 text-sm"
                      placeholder={`Prerequisite ${index + 1}`}
                    />
                    {formData.prerequisites.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem(index, 'prerequisites')}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('prerequisites')}
                  className="w-full p-2 text-cyan-600 border-2 border-dashed border-cyan-300 rounded-lg hover:border-cyan-400 hover:bg-cyan-50 transition-colors text-sm"
                >
                  + Add Prerequisite
                </button>
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
              {loading ? 'Creating...' : 'Create Course'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3.5 px-4 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 group"
      >
        <BookOpen 
        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
        size={20} />
       <span className="font-semibold">Add New Course</span>
      </button>
    );
  }

  return typeof document !== 'undefined' ? createPortal(<ModalContent />, document.body) : null;
}