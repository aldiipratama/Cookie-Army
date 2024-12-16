import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-16 md:w-60 h-full bg-gray-800">
        <div className="flex flex-col items-center md:items-start p-4 space-y-4">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-lg md:w-12 md:h-12">
            <i className="text-white">☰</i>
          </div>
          <div className="text-center md:text-left">
            <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
              <i>👤</i>
              <span className="hidden md:block">Profile</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-16 md:ml-60">
        {/* Header Section */}
        <div className="relative bg-gray-700 h-40">
          <div className="absolute top-20 left-6 flex items-center space-x-6">
            <img
              src="/profile-pic.jpg" // Ganti dengan path gambar
              alt="Profile"
              className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-900"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold">Kim Hye-yoon</h1>
              <p className="text-sm md:text-base text-gray-400">@kim_Hye-yoon</p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-20 px-6 md:px-12 flex justify-between items-center">
          <div className="flex space-x-6 md:space-x-12">
            <div>
              <h2 className="text-lg md:text-xl font-bold">1</h2>
              <p className="text-sm md:text-base text-gray-400">Posts</p>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold">1000</h2>
              <p className="text-sm md:text-base text-gray-400">Followers</p>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold">1000</h2>
              <p className="text-sm md:text-base text-gray-400">Following</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600">
            Edit Profile
          </button>
        </div>

        <div className="px-6 md:px-12 text-gray-400 text-sm mt-4">
          Followed by Kwon_Yuri + 80 more
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-700 mt-6 px-6 md:px-12">
          <ul className="flex space-x-6">
            {["Posts", "Saved", "Likes"].map((tab, index) => (
              <li key={index}>
                <button className="pb-2 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-500">
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Posts Section */}
        <div className="px-6 md:px-12 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-full h-40 bg-gray-700 rounded-lg overflow-hidden">
            <img
              src="/post1.jpg" // Ganti dengan path gambar
              alt="Post"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Tambahkan lebih banyak gambar post jika diperlukan */}
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
