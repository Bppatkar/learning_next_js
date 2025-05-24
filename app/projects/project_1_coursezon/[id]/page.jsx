"use client";
import React from "react";
import { courseDetails } from "../data.js";
import { useRouter } from "next/navigation";

const page = ({ params: { id } }) => {
  // console.log(`Course ID Recieved: ${id}`);
  const router = useRouter();

  const selectedCourseDetails = courseDetails.find((detail) =>
    detail.title.toLowerCase().includes(id.toLowerCase())
  );

  if (!selectedCourseDetails) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            Course Details Not Found
          </h2>
          <p className="text-gray-300">
            Could not retrieve details for course ID:{" "}
            <span className="font-bold">{id}</span>.
          </p>
          <button
            onClick={() => router.back()}
            className="mt-6 bg-amber-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-gray-800 rounded-xl shadow-lg w-full max-w-4xl border border-gray-700 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2 order-2 md:order-1">
            <h2 className="text-4xl font-bold text-orange-400 mb-6 leading-tight">
              {selectedCourseDetails.title}
            </h2>
            <div className="space-y-4 text-lg text-gray-200">
              <p>
                <span className="font-semibold text-amber-400">Duration:</span>{" "}
                {selectedCourseDetails.duration}
              </p>
              <p>
                <span className="font-semibold text-amber-400">Level:</span>{" "}
                {selectedCourseDetails.level}
              </p>
            </div>
          </div>

          {selectedCourseDetails.imageUrl && (
            <div className="w-full h-64 md:h-auto md:w-1/2 order-1 md:order-2 flex-shrink-0">
              <img
                src={selectedCourseDetails.imageUrl}
                alt={`${selectedCourseDetails.title} Course Image`}
                className="w-full h-full object-cover rounded-t-xl md:rounded-l-none md:rounded-tr-xl md:rounded-bl-xl "
                loading="lazy"
                // rounded-t-xl for small screens (image at top)
                // md:rounded-l-none removes left rounding on md+
                // md:rounded-tr-xl adds top-right rounding on md+
                // md:rounded-bl-xl adds bottom-left rounding on md+ (as seen in image)
              />
            </div>
          )}
        </div>

        <div className="p-8 border-t border-gray-700">
          <h3 className="text-3xl font-bold text-gray-100 mb-4">Projects:</h3>
          {selectedCourseDetails.projects &&
          selectedCourseDetails.projects.length > 0 ? (
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              {selectedCourseDetails.projects.map((project) => (
                <li key={project.id} className="text-lg">
                  <span className="font-medium text-white">
                    {project.title}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">
              No projects listed for this course yet.
            </p>
          )}
        </div>

        <div className="p-8 pt-0 text-center">
          <button
            onClick={() => router.back()}
            className="bg-amber-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full
                       transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75"
          >
            Back to Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
