import React from 'react';
import { MessageCircle } from 'lucide-react';
 const students = [
    {
      id: 1,
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      course: "Complete React.js Bootcamp",
      progress: 75,
      email: "emma.thompson@student.edu",
      status: "Active"
    },
    {
      id: 2,
      name: "John Martinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      course: "Advanced JavaScript Patterns",
      progress: 100,
      email: "john.martinez@student.edu",
      status: "Completed"
    },
    {
      id: 3,
      name: "Sophie Brown",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      course: "UI/UX Design Fundamentals",
      progress: 45,
      email: "sophie.brown@student.edu",
      status: "Active"
    }
  ];
const StudentsSection = () => (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Student Learning Tracker</h3>
          <p className="text-sm text-gray-600">Monitor your students progress and engagement</p>
        </div>
        <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition flex items-center gap-2">
          <MessageCircle size={16} />
          Send Message to All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div key={student.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{student.name}</h4>
                <p className="text-sm text-gray-600">{student.course}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${student.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                  <span className="text-xs font-medium text-gray-700">{student.status}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Progress</span>
                <span className="text-sm font-bold text-gray-900">{student.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${student.status === 'Completed' ? 'bg-green-600' : 'bg-blue-600'}`}
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-100 text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-200 transition text-sm font-medium">
                Message
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  export default StudentsSection;
