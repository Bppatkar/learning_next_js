"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const UserCard = ({ user }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 w-full max-w-md mx-auto">
    <div className="flex flex-col items-center mb-4">
      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
        alt="User Avatar"
        className="rounded-full w-28 h-28 object-cover border-4 border-yellow-400 mb-4 shadow-md"
      />
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 text-center">
        {user.name}
      </h3>
      <p className="text-md text-gray-600 dark:text-gray-400 text-center">
        @{user.username}
      </p>
    </div>

    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>Email:</strong>{" "}
        <a
          href={`mailto:${user.email}`}
          className="text-blue-600 hover:underline"
        >
          {user.email}
        </a>
      </p>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>Website:</strong>{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {user.website}
        </a>
      </p>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>Company:</strong> {user.company.name} ("
        {user.company.catchPhrase}")
      </p>
    </div>
  </div>
);

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await data.json();
        setData(res);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <p className="text-xl">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center h-screen bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100">
        <p className="text-xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-10 px-4 font-sans">
      <div className="w-full max-w-4xl bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-4 text-center tracking-wide">
          User Directory
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 text-center mb-0">
          Explore details of various users from our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl px-4">
        {data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <div className="mt-10">
        <Link href={"/fetchData"} passHref>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Back to Fetch Data
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
