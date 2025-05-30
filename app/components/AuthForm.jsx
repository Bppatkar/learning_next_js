"use client";
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaSignInAlt, FaUser, FaUserPlus, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Corrected apiUrl to use the project3_auth route with query parameters
  const apiUrl = isLogin ? "/api/project3_auth?login=true" : "/api/project3_auth?register=true";

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem("token")) {
      router.push("/profile");
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const { data } = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMessage(data.message);
      console.log("data from backend = ", data);

      if (data.success) {
        if (isLogin) {
          if (typeof window !== 'undefined') {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
          }
          router.push("/profile");
        } else {
          setIsLogin(true);
          setFormData({ userName: "", email: "", password: "" });
        }
      }
    } catch (error) {
      console.error("Authentication error:", error.response?.data || error.message);
      setMessage(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl  p-6 sm:p-10 max-w-md w-full mx-auto transform transition-all duration-300 hover:scale-[1.01]">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-5 left-5 p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 shadow-md"
        aria-label="Go back"
      >
        <FaArrowLeft size={20} />
      </button>

      <div className="text-center mb-8 pt-4">
        {isLogin ? (
          <FaSignInAlt size={60} className="text-blue-600 dark:text-blue-400 mx-auto mb-4 drop-shadow-lg" />
        ) : (
          <FaUserPlus size={60} className="text-green-600 dark:text-green-400 mx-auto mb-4 drop-shadow-lg" />
        )}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          {isLogin ? "Welcome Back!" : "Join Us!"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
          {isLogin ? "Sign in to your account" : "Create your new account"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {!isLogin && (
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              User Name
            </label>
            <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-200 shadow-sm">
              <span className="inline-flex items-center px-4 py-3 text-gray-500 dark:text-gray-400 text-lg">
                <FaUser />
              </span>
              <input
                type="text"
                name="userName"
                id="userName"
                className="flex-1 block w-full rounded-r-lg p-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
                placeholder="Your User Name"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-200 shadow-sm">
            <span className="inline-flex items-center px-4 py-3 text-gray-500 dark:text-gray-400 text-lg">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className="flex-1 block w-full rounded-r-lg p-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Password
          </label>
          <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all duration-200 shadow-sm">
            <span className="inline-flex items-center px-4 py-3 text-gray-500 dark:text-gray-400 text-lg">
              <FaLock />
            </span>
            <input
              type="password"
              name="password"
              id="password"
              className="flex-1 block w-full rounded-r-lg p-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-500 focus:outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-xl font-bold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
            isLogin
              ? "bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 focus:ring-indigo-500"
              : "bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 focus:ring-green-500"
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p
        className="text-center mt-6 text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-200 cursor-pointer text-base"
        onClick={() => {
          setIsLogin(!isLogin);
          setMessage("");
          setFormData({ userName: "", email: "", password: "" });
        }}
      >
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </p>
      {message && (
        <p className={`text-center mt-4 text-sm font-semibold ${message.includes("success") ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AuthForm;
