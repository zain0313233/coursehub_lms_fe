"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  User,
  BookOpen,
  UserRoundPen
} from "lucide-react";
import Link from "next/link";

import { useUser } from "../context/UserContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const router = useRouter();
  const { user, accessToken, refreshToken } = useUser();
  //   useEffect(()=>{
  // if(!user && !accessToken && !refreshToken){
  //   router.push('/login');
  // }
  //   },[user,accessToken,refreshToken])

  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "Pages", href: "/pages", hasDropdown: true },
    { name: "Courses", href: "/courses", hasDropdown: true },
    { name: "Instructers", href: "/Instructers", hasDropdown: false },
    { name: "News", href: "/news", hasDropdown: false },
    { name: "About Us", href: "/about", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false }
  ];

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <>
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 sm:py-3 text-xs sm:text-sm">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2 hover:text-blue-300 transition-colors duration-200">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium hidden sm:inline">
                  zain.ali.cs.dev@gmail.com
                </span>
                <span className="font-medium sm:hidden">Email</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 hover:text-blue-300 transition-colors duration-200">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">+92 333 1234567</span>
              </div>
            </div>

            <div className="items-center space-x-1 hidden md:flex">
              <Link
                href="/login"
                className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-white/10 transition-all duration-200 font-medium"
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Login</span>
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/signup"
                className="flex items-center ml-2 space-x-1 px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200 font-medium"
              >
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>SignUp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 sm:space-x-3 group"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                  <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    CourseHub
                  </h1>
                  <p className="text-xs text-gray-500 font-medium hidden sm:block">
                    Learn & Grow
                  </p>
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    setActiveDropdown(item.hasDropdown ? index : null)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wide transition-all duration-200 relative group"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                  </Link>

                  {item.hasDropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transform opacity-100 scale-100 transition-all duration-200">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Submenu Item 1
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Submenu Item 2
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Submenu Item 3
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => {
                  user.role === "student"
                    ? router.push("/dashbord/student")
                    : router.push("/dashbord/instructer");
                }}
                className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <UserRoundPen className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
              </button>

              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 text-left"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileDropdowns[item.name] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileDropdowns[item.name] && (
                      <div className="ml-4 mt-1 space-y-1">
                        <Link
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                          Submenu Item 1
                        </Link>
                        <Link
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                          Submenu Item 2
                        </Link>
                        <Link
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                          Submenu Item 3
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                  >
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 mt-4 border-t border-gray-200 space-y-2 md:hidden">
              <Link
                href="/login"
                className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <Link
                href="/signup"
                className="flex items-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200"
              >
                <BookOpen className="w-4 h-4" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
