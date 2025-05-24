"use client";
import React from "react";
import { courses } from "../data.js";
import { useRouter } from "next/navigation.js";

const CourseList = () => {
  const router = useRouter();
  return (
    <div className=" min-h-screen bg-gray-900 text-white p-12 sm:px-6 lg:px-8">
      <button className="mt-6 bg-amber-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200" onClick={() => router.back()}> Back to Home</button>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-orange-400 text-5xl sm:text-6xl font-extrabold text-center tracking-tight mt-3 ">
          Welcome To CourseZone Project
        </h1>
        <h3 className="text-center mt-6 text-3xl sm:text-4xl font-semibold text-gray-200">
          Following Courses We Offer
        </h3>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="w-8 h-8 text-amber-500 text-center mx-auto mt-8 animate-bounce"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
          {courses.map((course) => {
            return (
              <div
                key={course.id}
                className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center justify-between hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out border border-gray-700"
              >
                <div className="w-32 h-32 p-4 flex items-center justify-center rounded-full bg-gray-700 mb-6 flex-shrink-0">
                  <span className="text-5xl">{course.icon}</span>
                </div>
                <div className="text-center flex-grow flex flex-col items-center justify-center">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {course.title}
                  </h2>
                  <button
                    onClick={() =>
                      router.push(`/projects/project_1_coursezon/${course.id}`)
                    }
                    type="button"
                    className="bg-amber-500 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75"
                  >
                    Explore Courses
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
