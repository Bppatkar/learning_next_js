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

"use client";

import React from "react";
import { products } from "../../data.js";

// const page = ({ params: { slug } }) => {
const page = ({ params }) => {
  const { slug } = React.use(params);
  const newProductData = products.filter((data) =>
    data.category.toLowerCase().includes(slug.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="page-title">welcome to {slug}</h2>
      {newProductData.map((product) => {
        return (
          <div key={product.title} className="product">
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
