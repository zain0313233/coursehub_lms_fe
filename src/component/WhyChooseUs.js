import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className="w-full  h-full grid grid-cols-1 md:grid-cols-2 gap-0 p-8 md:mt-20 mt-10 ">
      <div className=" p-6  bg-white">
        <img
          src="./whychoseus.jpg"
          alt="Why Choose Us"
          className="w-full h-auto rounded-lg shadow-md mb-4"
        />
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-800">Join Over 50,000 Students</h3>
          <p className="text-gray-700 text-justify">
            Our platform has helped thousands of students achieve their learning goals and advance their careers across various industries.
          </p>
          
        </div>
      </div>
      <div className=" p-6  bg-white">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Why Choose Us?</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Expert Instructors</h3>
            <p className="text-gray-700 text-justify">
              Learn from industry professionals with years of real-world experience who are passionate about sharing their knowledge and helping you succeed.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Flexible Learning</h3>
            <p className="text-gray-700 text-justify">
              Study at your own pace with 24/7 access to course materials, video lectures, and interactive assignments that fit your busy schedule.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Career Support</h3>
            <p className="text-gray-700 text-justify">
              Get personalized career guidance, resume reviews, and job placement assistance to help you land your dream position in your chosen field.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Community & Networking</h3>
            <p className="text-gray-700 text-justify">
              Join a vibrant community of learners and professionals where you can collaborate, share ideas, and build valuable connections for your future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs