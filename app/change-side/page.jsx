// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <h3>
//         this is a server side component we change it from server to client
//       </h3>
//       <p>by using 'use client;' on the top</p>
//     </div>
//   );
// };

// export default page;

//? now we can use any hooks and state management here

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);

  useEffect(() => {
    let intetvalId;
    if (isIncrementing) {
      intetvalId = setInterval(() => {
        setCount(count + 1);
      }, 100);
    } else if (isDecrementing) {
      intetvalId = setInterval(() => {
        setCount(count > 0 ? count - 1 : 0);
      }, 100);
    }
    return () => {
      clearInterval(intetvalId);
    };
  }, [isDecrementing, isIncrementing, count]);

  const handleMouseDown = (type) => {
    if (type === "increment") {
      setIsIncrementing(true);
    } else if (type === "decrement") {
      setIsDecrementing(true);
    }
  };

  const handleMouseUp = () => {
    setIsDecrementing(false);
    setIsIncrementing(false);
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white p-6 flex flex-col items-center justify-center min-h-screen">
      <h3 className="text-2xl font-bold mb-4">Client-Side Component</h3>
      <p className="text-lg font-medium mb-6">Counter Value: {count}</p>
      <div className="flex gap-4 mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onMouseDown={() => handleMouseDown("increment")}
          onMouseUp={handleMouseUp}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onMouseDown={() => handleMouseDown("decrement")}
          onMouseUp={handleMouseUp}
        >
          Decrement
        </button>
      </div>
      <hr className="my-6" />
      <button
        className="bg-amber-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200"
        onClick={() => router.push("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Page;
