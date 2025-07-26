import React from "react";
import { Star, Users, BookOpen, Award } from "lucide-react";

const PopularInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Full Stack Developer & Tech Lead",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      students: 12500,
      courses: 8,
      expertise: ["React", "Node.js", "Python"],
      price: "$45/hr",
      bio: "10+ years experience in software development with expertise in modern web technologies."
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Data Science & AI Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      students: 8900,
      courses: 12,
      expertise: ["Python", "Machine Learning", "TensorFlow"],
      price: "$60/hr",
      bio: "PhD in Computer Science, specializing in machine learning and artificial intelligence."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "UX/UI Design Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      students: 15200,
      courses: 6,
      expertise: ["Figma", "Adobe XD", "Prototyping"],
      price: "$40/hr",
      bio: "Award-winning designer with 8 years of experience creating user-centered digital experiences."
    },
    {
      id: 4,
      name: "James Wilson",
      title: "Cybersecurity Consultant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      students: 6800,
      courses: 10,
      expertise: ["Ethical Hacking", "Network Security", "CISSP"],
      price: "$75/hr",
      bio: "Certified cybersecurity expert helping organizations secure their digital infrastructure."
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      title: "Mobile App Development",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      students: 9500,
      courses: 7,
      expertise: ["React Native", "Flutter", "iOS"],
      price: "$50/hr",
      bio: "Mobile development specialist with apps featured in both App Store and Google Play."
    },
    {
      id: 6,
      name: "Alex Thompson",
      title: "DevOps & Cloud Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      students: 7300,
      courses: 9,
      expertise: ["AWS", "Docker", "Kubernetes"],
      price: "$65/hr",
      bio: "Cloud infrastructure expert helping companies scale their applications efficiently."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black bg-clip-text mb-6">
            Popular Instructors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry experts who have taught thousands of students and shaped countless careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-cyan-200 hover:-translate-y-2"
            >
              <div className="relative p-8 pb-6">
                <div className="absolute top-6 right-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    {instructor.rating}
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors">
                    {instructor.name}
                  </h3>
                  <p className="text-cyan-600 font-semibold mb-4 text-lg">{instructor.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{instructor.bio}</p>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {instructor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium border border-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 w-full mb-6 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Users className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div className="text-lg font-bold text-gray-900">{instructor.students.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <BookOpen className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div className="text-lg font-bold text-gray-900">{instructor.courses}</div>
                      <div className="text-xs text-gray-600">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Award className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div className="text-lg font-bold text-gray-900">{instructor.price}</div>
                      <div className="text-xs text-gray-600">Per Hour</div>
                    </div>
                  </div>

                  <div className="flex gap-3 w-full">
                    <button className="flex-1 bg-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      View Profile
                    </button>
                    <button className="flex-1 border-2 border-cyan-600 text-cyan-900 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-cyan-600 text-white py-4 px-12 rounded-2xl font-bold text-lg hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
            View All Instructors
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;