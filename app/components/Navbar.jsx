import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  FaSignOutAlt, FaHome
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";


const Navbar = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsLoggedIn(!!localStorage.getItem("token"));
      }
    }, []); // Check login status on mount

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        router.push("/");
    };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-gray-900 dark:to-gray-950 p-5 shadow-2xl w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a className='text-white font-extrabold flex items-center text-3xl sm:text-4xl tracking-wide' href='/'>
          <MdSecurity size={38} className='mr-3 text-yellow-400 drop-shadow-lg'/>
          NextAuth App
        </a>

        <div className="flex space-x-5 sm:space-x-8">
          {!isLoggedIn && (
            <a className='bg-white bg-opacity-10 text-white px-5 py-2.5 rounded-full flex items-center hover:bg-opacity-20 transition-all duration-300 shadow-lg text-lg sm:text-xl font-semibold border border-white border-opacity-30' href='/'>
              <FaHome className='mr-3 text-xl' />Home
            </a>
          )}

          {isLoggedIn && (
            <button
              className='bg-red-600 bg-opacity-90 text-white px-5 py-2.5 rounded-full flex items-center hover:bg-red-700 hover:bg-opacity-100 transition-all duration-300 shadow-lg text-lg sm:text-xl font-semibold'
              onClick={handleLogout}
            >
              <FaSignOutAlt className='mr-3 text-xl' />Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
