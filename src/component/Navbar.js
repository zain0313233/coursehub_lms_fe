"use client";
import React, { useState} from "react";
import { Search, Menu, X, ChevronDown, Phone, Mail, User, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

 

  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'Pages', href: '/pages', hasDropdown: true },
    { name: 'Courses', href: '/courses', hasDropdown: true },
    { name: 'Teachers', href: '/teachers', hasDropdown: false },
    { name: 'News', href: '/news', hasDropdown: false },
    { name: 'About Us', href: '/about', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false }
  ];

  return (
    <>
  
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="font-medium">zain.ali.cs.dev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+92 333 1234567</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <a
                href="/login"
                className="flex items-center space-x-1 px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-200 font-medium"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="/signup"
                className="flex items-center ml-2 space-x-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200 font-medium"
              >
                <BookOpen className="w-4 h-4" />
                <span>SignUp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

     
      <header className={`bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
           
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center space-x-3 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    CourseHub
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">Learn & Grow</p>
                </div>
              </a>
            </div>

           
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.hasDropdown ? index : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wide transition-all duration-200 relative group"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    )}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                  </a>
                  
                 
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transform opacity-100 scale-100 transition-all duration-200">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                        Submenu Item 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                        Submenu Item 2
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                        Submenu Item 3
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </nav>

           
            <div className="flex items-center space-x-4">
              
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                <Search className="w-5 h-5" />
              </button>

             
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

     
        <div className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
              >
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;