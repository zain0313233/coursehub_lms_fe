import React, { useState, useEffect } from "react";

const ExploreCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Learn HTML, CSS, and JavaScript from scratch.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      instructor: "John Smith",
      date: "2024-12-15",
      rating: 4.8,
      price: "$299"
    },
    {
      id: 2,
      title: "Data Science with Python",
      description: "Master data analysis and machine learning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      instructor: "Sarah Johnson",
      date: "2024-12-10",
      rating: 4.9,
      price: "$399"
    },
    {
      id: 3,
      title: "Digital Marketing Essentials",
      description: "Understand SEO, SEM, and social media marketing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      instructor: "Mike Chen",
      date: "2024-12-08",
      rating: 4.7,
      price: "$199"
    },
    {
      id: 4,
      title: "Learn Basic Coding",
      description: "Get started with programming fundamentals.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
      instructor: "Emma Davis",
      date: "2024-12-05",
      rating: 4.6,
      price: "$149"
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Create apps for iOS and Android platforms.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      instructor: "Alex Rodriguez",
      date: "2024-12-03",
      rating: 4.8,
      price: "$349"
    },
    {
      id: 6,
      title: "Cybersecurity Basics",
      description: "Learn about network security and ethical hacking.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      instructor: "Lisa Wang",
      date: "2024-12-01",
      rating: 4.9,
      price: "$279"
    },
    {
      id: 7,
      title: "DevOps and Cloud Computing",
      description: "Explore DevOps practices and cloud technologies.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      instructor: "David Brown",
      date: "2024-11-28",
      rating: 4.7,
      price: "$429"
    },
    {
      id: 8,
      title: "AI and Machine Learning",
      description: "Dive into artificial intelligence and machine learning.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      instructor: "Rachel Green",
      date: "2024-11-25",
      rating: 4.9,
      price: "$499"
    },
    {
      id: 9,
      title: "Blockchain Technology",
      description: "Understand blockchain and its applications.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      instructor: "Tom Wilson",
      date: "2024-11-22",
      rating: 4.6,
      price: "$379"
    },
    {
      id: 10,
      title: "Game Development with Unity",
      description: "Learn to create games using Unity engine.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      instructor: "Amy Taylor",
      date: "2024-11-20",
      rating: 4.8,
      price: "$329"
    }
  ];

  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [courses.length]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">★</span>
      );
    }

    return stars;
  };


  const getTransform = () => {
    if (isMobile) {
     
      return `translateX(-${currentIndex * 100}%)`;
    } else {
      
      return `translateX(-${currentIndex * 33.333}%)`;
    }
  };


  const duplicatedCourses = [...courses, ...courses, ...courses];

  return (
    <div className="w-full h-auto flex flex-col mb-20">
      <div className="relative w-full">
        <div className="bg-gradient-to-br from-teal-400 via-cyan-400 to-emerald-500 w-full py-12 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold text-center leading-tight">
            Explore our <br /> popular courses
          </h1>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
          <div className="w-0 h-0 border-l-[40px] sm:border-l-[60px] md:border-l-[80px] border-r-[40px] sm:border-r-[60px] md:border-r-[80px] border-t-[40px] sm:border-t-[60px] md:border-t-[80px] border-l-transparent border-r-transparent border-t-teal-400"></div>
        </div>
      </div>

      <div className="mt-20 sm:mt-28 md:mt-36 lg:mt-40 w-full px-2 sm:px-4 md:px-8 lg:px-16 py-6 sm:py-8 lg:py-10 overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-in-out" 
          style={{ transform: getTransform() }}
        >
          {duplicatedCourses.map((course, index) => (
            <div
              key={`${course.id}-${index}`}
              className="flex-shrink-0 w-full md:w-1/3 px-2 sm:px-3"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto max-w-sm md:max-w-none">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover"
                />
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                    <span>By {course.instructor}</span>
                    <span className="mx-2">•</span>
                    <span>{formatDate(course.date)}</span>
                  </div>
                  
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 text-gray-700">{course.title}</h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2 text-sm sm:text-base">
                      {renderStars(course.rating)}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{course.rating}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl sm:text-2xl font-bold text-teal-600">{course.price}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-md transition-colors duration-200 text-sm font-medium">
                      Buy Course
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 sm:py-2.5 px-3 sm:px-4 rounded-md transition-colors duration-200 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="flex justify-center space-x-2 mt-4">
          {courses.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex % courses.length
                  ? 'bg-teal-500'
                  : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ExploreCourses;