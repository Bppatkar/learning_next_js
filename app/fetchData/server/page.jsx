import Link from "next/link";
import React from "react";

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const res = await data.json();
  return res;
};
const page = async () => {
  const data = await getData();
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
        <ul className="list-disc pl-6">
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <div className="flex justify-center mt-6">
          <Link href={"/fetchData"}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
              Back to fetch data
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

//* in Next_Js server components when we try to fetch data in server components so we make components async -- const page = async () =>  and yes - server component is faster than client components

//? and we use loading.jsx file means simple loader which we create in app folder... we can show till data is fetched we dont have to write in server folder that setLoading true and false while fetching data but we do in client component

//! and we dont have to import loading.jsx file in server component... it will work automatically
// if we remove 's' from fetching link todos means
// com/todos to ----> com/todo
// then we can see loading for a tiny bit time then we got error of map method but we can see our loader
//? that map method error because of server component - for remove that use "use client"

//! or if you want to see loader than make network slow 3g in developer mode