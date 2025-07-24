"use client";
import React from "react";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ChevronRight,
  Clock,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Courses', href: '/courses' },
    { name: 'Our Teachers', href: '/teachers' },
    { name: 'Student Portal', href: '/portal' },
    { name: 'Success Stories', href: '/stories' },
    { name: 'Career Support', href: '/career' }
  ];

  const courses = [
    { name: 'Web Development', href: '/courses/web-dev' },
    { name: 'Data Science', href: '/courses/data-science' },
    { name: 'Mobile App Development', href: '/courses/mobile' },
    { name: 'UI/UX Design', href: '/courses/design' },
    { name: 'Digital Marketing', href: '/courses/marketing' },
    { name: 'Cybersecurity', href: '/courses/security' }
  ];

  const resources = [
    { name: 'Blog & Articles', href: '/blog' },
    { name: 'Free Resources', href: '/resources' },
    { name: 'Certification', href: '/certification' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community Forum', href: '/forum' },
    { name: 'Live Events', href: '/events' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

 

  return (
    <footer className="bg-gray-800 text-white">
      

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    CourseHub
                  </h2>
                  <p className="text-xs text-gray-400 font-medium">Learn & Grow</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your career with our comprehensive online courses. Learn from industry experts and join thousands of successful graduates worldwide.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-200 hover:bg-gray-600 transform hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Popular Courses</h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{course.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
              <ul className="space-y-3 mb-8">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{resource.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-white flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  Support Hours
                </h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>zain.ali.cs.dev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+92 333 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rawalpindi, Punjab, Pakistan</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              <p>&copy; 2025 CourseHub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;