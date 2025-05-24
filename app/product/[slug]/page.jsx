// import React from "react";
// import { products } from "../../data.js";

// const page = ({ params: { slug } }) => {
//   // console.log("printing the slug........", slug);
//   const newProductData = products.filter((data) =>
//     data.category.toLowerCase().includes(slug.toLowerCase())
//   );
//   // console.log(newProductData);
//   return (
//     <div className="container">
//       <h2 className="page-title">welcome to {slug}</h2>
//       {newProductData.map((product) => {
//         return (
//           <div key={product.title} className="product">
//             <h3 className="product-title">{product.title}</h3>
//             <p className="product-price">Price: ${product.price}</p>
//             <p className="product-rating">
//               User Rating: {product.userRating}⭐
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default page;
//! now it becomes pure client component initially it was server component bydefault

// "use client";

// import React from "react";
// import { products } from "../../data.js";

// // const page = ({ params: { slug } }) => {
// const page = ({ params }) => {
//   const { slug } = React.use(params);
//   const newProductData = products.filter((data) =>
//     data.category.toLowerCase().includes(slug.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <h2 className="page-title">welcome to {slug}</h2>
//       {newProductData.map((product) => {
//         return (
//           <div key={product.title} className="product">
//             <h3 className="product-title">{product.title}</h3>
//             <p className="product-price">Price: ${product.price}</p>
//             <p className="product-rating">
//               User Rating: {product.userRating}⭐
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default page;

//! in react we use useNavigate but in next we use useRoute

// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { products } from "../../data.js";

// // const page = ({ params: { slug } }) => {
// const page = ({ params }) => {
//   const { slug } = React.use(params);
//   //? using here
//   const router = useRouter();
//   const newProductData = products.filter((data) =>
//     data.category.toLowerCase().includes(slug.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <h2 className="page-title">welcome to {slug}</h2>
//       <button onClick={() => router.push("/product")}> Back to Products</button>
//       {newProductData.map((product) => {
//         return (
//           <div key={product.title} className="product">
//             <h3 className="product-title">{product.title}</h3>
//             <p className="product-price">Price: ${product.price}</p>
//             <p className="product-rating">
//               User Rating: {product.userRating}⭐
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default page;

/**
 * Next.js Router Methods:
 *
 * back()       - Go to previous page (like browser back button)
 * forward()    - Go to next page (like browser forward button)
 * push(url)    - Navigate to new page (adds to history)
 * replace(url) - Change page without history entry
 * refresh()    - Reload current page (keeps React state)
 * prefetch(url)- Preload page for faster navigation
 */

//? useRouter() is a hook that gives you access to the router object, which contains methods and properties for navigation and routing in your Next.js application. It allows you to programmatically navigate between pages, access query parameters, and perform other routing-related tasks.

//! in react we use "useLocation" but in next js we use "usePathname" to get whole URL

"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { products } from "../../data.js";
import Image from "next/image.js";

// const page = ({ params: { slug } }) => {
const page = ({ params }) => {
  const { slug } = React.use(params);
  //? using here
  const router = useRouter();
  // using "usePathname" here
  // console.log(" we are having path name is - usePathname :- - ", usePathname()); // we got - /product/smart-watch
  const location = usePathname().split("/"); // we got - [ '', 'product', 'smart-watch' ]
  const newProductData = products.filter((data) =>
    data.category.toLowerCase().includes(slug.toLowerCase())
  );

  return (
    <div className="container">
      {location[2] === "smart-watch" ? (
        <h1>we will update soon</h1>
      ) : (
        <h2 className="page-title">welcome to {slug}</h2>
      )}
      <button onClick={() => router.push("/product")}> Back to Products</button>
      {newProductData.map((product) => {
        return (
          <div key={product.title} className="product">
            <img
              src="https://images.unsplash.com/photo-1691073112675-9685bc6779bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img1"
              width={"200px"}
              height={"200px"}
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-rating">
              User Rating: {product.userRating}⭐
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
