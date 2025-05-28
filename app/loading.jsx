import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
      <p className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
