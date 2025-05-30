"use client";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const Page = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        router.push("/");
      } else {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 dark:bg-gray-950 text-white flex flex-col items-center justify-center">
        <p className="text-xl text-gray-400">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 dark:bg-gray-950 text-white flex flex-col items-center justify-center">
        <p className="text-xl text-red-400">Access Denied. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-950 text-white flex flex-col items-center py-10 px-4">
      <Navbar />
      <div className="flex justify-center w-full mt-12">
        <div
          className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-3xl w-full max-w-sm border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-4xl"
        >
          <div className="text-center mb-8">
            <FaUser size={70} className="text-blue-600 dark:text-blue-400 mx-auto mb-5 drop-shadow-lg" />
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">User Profile</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Your personal details</p>
          </div>
          <div className="space-y-5">
            <div className="flex items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-inner">
              <FaUser className="text-blue-500 dark:text-blue-400 mr-4" size={22} />
              <p className="text-gray-700 dark:text-gray-300 text-lg flex-1">
                <strong className="font-semibold text-gray-800 dark:text-gray-200">Name:</strong> {user.userName || user.name || 'N/A'}
              </p>
            </div>
            <div className="flex items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-inner">
              <FaEnvelope className="text-green-500 dark:text-green-400 mr-4" size={22} />
              <p className="text-gray-700 dark:text-gray-300 text-lg flex-1">
                <strong className="font-semibold text-gray-800 dark:text-gray-200">Email:</strong> {user.email || 'N/A'}
              </p>
            </div>
          </div>
          <button
            className="w-full mt-10 py-4 px-6 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-xl shadow-lg flex justify-center items-center transition-all duration-300 transform hover:scale-105 hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 text-xl"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-3" size={22} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
