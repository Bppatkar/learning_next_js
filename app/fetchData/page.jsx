import React from "react";

export const metadata = {
  title: "Fetch Data",
  description: "here we are going to fetch data in server and client side",
};

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <h1
        className="text-3xl sm:text-4xl font-bold mb-4
                 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
      >
        Fetching Data....
      </h1>
      <p
        className="text-xl text-gray-700 dark:text-gray-300
                leading-relaxed max-w-md mx-auto"
      >
        Click on the buttons above to see client-side or server-side fetching.
      </p>
    </div>
  );
};

export default Page;
