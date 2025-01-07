import { Head } from '@inertiajs/react'
import React from 'react'



const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="flex flex-col w-64 h-screen p-4 text-gray-300 bg-gray-800">
        <h1 className="mb-6 text-xl font-bold text-white">ShareFly</h1>
        <nav className="flex flex-col gap-4">
          <a href="#" className="text-yellow-400 hover:text-white">
            Overview
          </a>
          <a href="#" className="hover:text-yellow-400">Posts</a>
          <a href="#" className="hover:text-yellow-400">Report</a>
          <a href="#" className="hover:text-yellow-400">Message</a>
          <a href="#" className="hover:text-yellow-400">Statistic</a>
          <a href="#" className="hover:text-yellow-400">Setting</a>
        </nav>
      </div>

      {/* Dashboard Post */}
      <div className="flex-1 p-6 text-gray-300 bg-gray-900">
        <h2 className="mb-4 text-2xl font-bold text-white">Dashboard Post</h2>
        <table className="w-full border border-collapse border-gray-700 table-auto">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 border border-gray-700">ID</th>
              <th className="px-4 py-2 border border-gray-700">Title</th>
              <th className="px-4 py-2 border border-gray-700">Slug</th>
              <th className="px-4 py-2 border border-gray-700">Description</th>
              <th className="px-4 py-2 border border-gray-700">Create Date</th>
              <th className="px-4 py-2 border border-gray-700">Edit</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, index) => (
              <tr key={index} className="hover:bg-gray-800">
                <td className="px-4 py-2 text-center border border-gray-700">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-700"></td>
                <td className="px-4 py-2 border border-gray-700"></td>
                <td className="px-4 py-2 border border-gray-700"></td>
                <td className="px-4 py-2 border border-gray-700"></td>
                <td className="px-4 py-2 text-center border border-gray-700">
                  <button className="mr-2 text-green-500 hover:text-green-400">
                    <i className="fas fa-edit"></i> 🖉
                  </button>
                  <button className="text-red-500 hover:text-red-400">
                    <i className="fas fa-trash"></i> 🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
