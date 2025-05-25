// import Link from "next/link";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <h1>this is profile section</h1>
//       <h2>some links called next/link</h2>
//       <ul>
//         <li>
//           <Link href={"profile/about"}>about</Link>
//         </li>
//         <li>
//           <Link href={"profile/login"}>login</Link>
//         </li>
//         <li>
//           <Link href={"profile/forgot-password"}>forgot-password</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default page;

//! we are moving this code into component profilesection file

// "use client";
// import Link from "next/link";
// import React from "react";
// import { useRouter } from "next/navigation";

// const page = () => {
//   const router = useRouter();
//   return (
//     <div>
//       <h1>this is profile section</h1>
//       <h2>some links called next/link</h2>
//       <ul>
//         <li>
//           <Link href={"profile/about"}>about</Link>
//         </li>
//         <li>
//           <Link href={"profile/login"}>login</Link>
//         </li>
//         <li>
//           <Link href={"profile/forgot-password"}>forgot-password</Link>
//         </li>
//       </ul>
//       <button onClick={() => router.back()}> Back to Home</button>
//     </div>
//   );
// };

// export default page;

//! only rest of code is

"use client";
import React from "react";


const page = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to your Profile Page
      </h1>
    </div>
  );
};
export default page;
