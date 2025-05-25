import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-center px-4 py-8">
      <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4 text-center">
          Server-Side Data Fetching
        </h2>
        <p className="text-lg font-medium mb-6 text-center">
          This is a demo of how to fetch data with Next.js. The data is fetched
          from the{" "}
          <code className="px-1 py-0.5 text-sm font-mono rounded bg-gray-300 dark:bg-gray-600">
            /api/data
          </code>{" "}
          API endpoint.
        </p>
        <div className="flex justify-center">
          <Link href={"/fetchData"}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
