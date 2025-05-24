"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const ProfileSection = () => {
  const router = useRouter();

  return (
    <div className="dark:bg-gray-900 dark:text-white p-6 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-12">Profile Section</h1>
      <h2 className="text-lg font-medium mb-6">Some useful links</h2>
      <ul className="grid grid-cols-2 gap-6 mb-6">
        <li>
          <Link
            href="/profile/about"
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/profile/login"
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/profile/forgot-password"
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Forgot Password
          </Link>
        </li>
      </ul>
      <p className="text-red-500 ">
        look in address bar <span className="font-bold text-yellow-300">routes are changing</span>
      </p>
      <button
        className="mt-12 bg-amber-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200"
        onClick={() => router.push("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ProfileSection;
