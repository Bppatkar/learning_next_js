import React from "react";
import AuthForm from "./AuthForm";

export const metadata = {
  title: "Authentication",
  description: "This is the authentication page.",
};

const page = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center p-4 shadow-2xl">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Authentication
        </h1>

        <AuthForm />
      </div>
    </div>
  );
};

export default page;
