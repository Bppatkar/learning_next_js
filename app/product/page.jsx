// import Link from "next/link";
// import React from "react";

// const page = () => {
//   const products = [
//     { id: 1, title: "phones" },
//     { id: 2, title: "laptops" },
//     { id: 3, title: "cameras" },
//     { id: 4, title: "earbuds" },
//     { id: 5, title: "tvs" },
//     { id: 6, title: "smart-watch" },
//   ];
//   return (
//     <div>
//       <h1>this is a product page</h1>
//       {/* <ul>
//         <li>
//           <Link href={"/product/TVs"}>Tv's</Link>
//         </li>
//         <li>
//           <Link href={"/product/Phones"}>phone</Link>
//         </li>
//         <li>
//           <Link href={"/product/Laptops"}>laptop</Link>
//         </li>
//         <li>
//           <Link href={"/product/Cameras"}>cameras</Link>
//         </li>
//         <li>
//           <Link href={"/product/Earbuds"}>earbuds</Link>
//         </li>
//       </ul> */}
//       {products.map((product) => {
//         return (
//           <ul key={product.id}>
//             <li>
//               <Link href={`/product/${product.title}`}>{product.title}</Link>
//             </li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

// export default page;

"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const products = [
    { id: 1, title: "phones" },
    { id: 2, title: "laptops" },
    { id: 3, title: "cameras" },
    { id: 4, title: "earbuds" },
    { id: 5, title: "tvs" },
    { id: 6, title: "smart-watch" },
    { id: 7, title: "cricket-kit" },
  ];
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen text-center mb-1 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-12">Welcome to our product page</h1>
      {/* <ul>
        <li>
          <Link href={"/product/TVs"}>Tv's</Link>
        </li>
        <li>
          <Link href={"/product/Phones"}>phone</Link>
        </li>
        <li>
          <Link href={"/product/Laptops"}>laptop</Link>
        </li>
        <li>
          <Link href={"/product/Cameras"}>cameras</Link>
        </li>
        <li>
          <Link href={"/product/Earbuds"}>earbuds</Link>
        </li>
      </ul> */}
      <ul className="grid grid-cols-2 gap-6">
  {products.map((product) => {
    return (
      <li key={product.id}>
        <Link href={`/product/${product.title}`} passHref>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
            {product.title}
          </div>
        </Link>
      </li>
    );
  })}
</ul>
      <button className="mt-12 bg-amber-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200" onClick={() => router.back()}> Back to Home</button>
    </div>
  );
};

export default page;

