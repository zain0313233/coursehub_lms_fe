import React from 'react'

const MyInstructers = () => {
  return (
   <div>
  <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
    My Instructors
  </h3>
  <div className="flex flex-col md:flex-row md:gap-4">
    
    {/* Instructor 1 */}
    <div className="flex-1 mt-6 bg-gray-50 rounded-lg p-4 hover:shadow-md transition duration-200">
      <div className="flex flex-col items-center text-center">
        <img 
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face" 
          alt="Dr. Sarah Miller" 
          className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-blue-200"
        />
        <h4 className="font-semibold text-gray-800 mb-1">Dr. Sarah Miller</h4>
        <p className="text-sm text-gray-600 mb-1">Web Development Specialist</p>
        <p className="text-sm text-blue-600 mb-1">8 years experience</p>
        <p className="text-sm text-gray-500 mb-3">sarah.miller@university.edu</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition duration-200">
            Message
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition duration-200">
            Profile
          </button>
        </div>
      </div>
    </div>

    {/* Instructor 2 */}
    <div className="flex-1 mt-6 bg-gray-50 rounded-lg p-4 hover:shadow-md transition duration-200">
      <div className="flex flex-col items-center text-center">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
          alt="Prof. Michael Johnson" 
          className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-green-200"
        />
        <h4 className="font-semibold text-gray-800 mb-1">Prof. Michael Johnson</h4>
        <p className="text-sm text-gray-600 mb-1">React.js & Frontend Expert</p>
        <p className="text-sm text-green-600 mb-1">12 years experience</p>
        <p className="text-sm text-gray-500 mb-3">m.johnson@university.edu</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs hover:bg-green-200 transition duration-200">
            Message
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition duration-200">
            Profile
          </button>
        </div>
      </div>
    </div>

    {/* Instructor 3 */}
    <div className="flex-1 mt-6 bg-gray-50 rounded-lg p-4 hover:shadow-md transition duration-200">
      <div className="flex flex-col items-center text-center">
        <img 
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" 
          alt="Dr. Emily Wilson" 
          className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-purple-200"
        />
        <h4 className="font-semibold text-gray-800 mb-1">Dr. Emily Wilson</h4>
        <p className="text-sm text-gray-600 mb-1">Database Systems Authority</p>
        <p className="text-sm text-purple-600 mb-1">10 years experience</p>
        <p className="text-sm text-gray-500 mb-3">e.wilson@university.edu</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs hover:bg-purple-200 transition duration-200">
            Message
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition duration-200">
            Profile
          </button>
        </div>
      </div>
    </div>

  </div>
</div>

  )
}

export default MyInstructers
