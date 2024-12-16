import React from "react";
import { FaCamera, FaUser } from "react-icons/fa";

const Profile: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-900 p-4 flex flex-col space-y-6">
        <div className="flex items-center space-x-2">
          <FaUser className="text-xl" />
          <span className="font-semibold text-gray-300">Profile</span>
        </div>
        <div className="text-gray-400">☰</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-950 p-8">
        {/* Profile Picture */}
        <div className="relative flex justify-center items-center mb-6">
          <div className="w-32 h-32 bg-gray-700 rounded-full flex justify-center items-center">
            <FaCamera className="text-3xl text-gray-400" />
          </div>
          <div className="absolute w-12 h-12 bg-gray-600 rounded-full flex justify-center items-center bottom-2 left-2">
            <FaCamera className="text-xl text-white" />
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="font-bold">Kim Hye-yoon</p>
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm text-gray-400">Bio</p>
              <p className="text-gray-300">-</p>
            </div>

            {/* Email */}
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-gray-300">@kim_Hye-yoon</p>
            </div>

            {/* Password */}
            <div>
              <p className="text-sm text-gray-400">Password</p>
              <p className="text-gray-300">*********</p>
            </div>

            {/* Country */}
            <div>
              <p className="text-sm text-gray-400">Country</p>
              <p className="text-gray-300">Indonesia</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
