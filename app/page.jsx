import React from "react";
import Link from "next/link";


const Page = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen text-center mb-1">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-yellow-500 mb-6">
          Welcome to Next.js
        </h1>
        <ul className="list-none mb-6 text-3xl">
          <li className="mb-2">
            <Link
              href="/profileLearn"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Go to Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/change-side"
              className="text-green-500 hover:text-green-700 transition-colors duration-200"
            >
              Server-to-Client
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/product"
              className="text-purple-500 hover:text-purple-700 transition-colors duration-200"
            >
              Product
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/projects/project_1_coursezon"
              className="text-orange-500 hover:text-orange-700 transition-colors duration-200"
            >
              Project 1: Coursezon
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/fetchData"
              className="text-teal-500 hover:text-teal-700 transition-colors duration-200"
            >
              Fetch Data
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/projects/project_2_meme-generator"
              className="text-pink-500 hover:text-pink-700 transition-colors duration-200"
            >
              Project 2: Meme Generator
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/api"
              className="text-cyan-400 hover:text-cyan-600 transition-colors duration-200"
            >
              Next.js Backend CRUD Operation
            </Link>
          </li>
          <li className="mb-2 text-rose-400 hover:text-rose-600 transition-colors duration-200">
            <Link href="/components">
              Project 3 [Authentication]
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
