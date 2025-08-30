import React from 'react';
import { Users } from 'lucide-react';
 const instructorData = {
    name: "Dr. Amanda Rodriguez",
    role: "Senior Web Development Instructor",
    email: "amanda.rodriguez@university.edu",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    specialization: "Full-Stack Development & UI/UX Design",
    experience: "15 years",
    tagline: "Empowering the next generation of developers through innovative teaching methods",
    followers: 2847,
    profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=120&h=120&fit=crop&crop=face",
    id: "INS789",
    batch: "Faculty 2018",
    status: "Active Instructor"
  };
const followers = [
    {
      id: 1,
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      followedDate: "2 days ago"
    },
    {
      id: 2,
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      followedDate: "5 days ago"
    },
    {
      id: 3,
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      followedDate: "1 week ago"
    }
  ];
   const FollowersSection = () => (
      <div className="mb-12">
        <div className="md:flex block items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Followers & Engagement</h3>
            <p className="text-sm text-gray-600">Connect with your learning community</p>
          </div>
          <button className="bg-green-600 md:mt-0 mt-6 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
            <Users size={16} />
            View All ({instructorData.followers})
          </button>
        </div>
  
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="text-center">
              <div className="md:text-3xl text-xl font-bold text-gray-900 mb-1">{instructorData.followers}</div>
              <div className="text-sm text-gray-600">Total Followers</div>
            </div>
            <div className="text-center">
              <div className="md:text-3xl text-xl  font-bold text-green-600 mb-1">+{Math.floor(instructorData.followers * 0.1)}</div>
              <div className="text-sm text-gray-600">This Month</div>
            </div>
            <div className="text-center">
              <div className="md:text-3xl text-xl  font-bold text-blue-600 mb-1">4.9</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
          </div>
  
          <h4 className="font-semibold text-gray-800 mb-4">Recent Followers</h4>
          <div className="space-y-3">
            {followers.map((follower) => (
              <div key={follower.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    src={follower.avatar}
                    alt={follower.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-medium text-gray-900">{follower.name}</h5>
                    <p className="text-sm text-gray-600">Followed {follower.followedDate}</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
export default FollowersSection;
