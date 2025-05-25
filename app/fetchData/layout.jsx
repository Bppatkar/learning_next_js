"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";



const layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <div className="flex flex-row items-start justify-between p-4">
        <h1 className="text-5xl font-bold text-yellow-500 mb-6">Fetch Data</h1>
        <button
          className="bg-amber-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
      <div className="flex flex-col items-start justify-start p-4">
        <p className="text-2xl font-medium mb-4">
          This is a demo of how to fetch data with Next.js.
        </p>
        <div className="flex flex-row items-center gap-1.5 mb-4">
          <Link
            href="/fetchData/client"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Client-Side Data Fetching
          </Link>
          <Link
            href="/fetchData/server"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Server-Side Data Fetching
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default layout;
