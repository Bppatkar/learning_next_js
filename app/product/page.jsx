import Link from "next/link";
import React from "react";

const page = () => {
  const products = [
    { id: 1, title: "phones" },
    { id: 2, title: "laptops" },
    { id: 3, title: "cameras" },
    { id: 4, title: "earbuds" },
    { id: 5, title: "tvs" },
    { id: 6, title: "smart-watch" },
  ];
  return (
    <div>
      <h1>this is a product page</h1>
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
      {products.map((product) => {
        return (
          <ul key={product.id}>
            <li>
              <Link href={`/product/${product.title}`}>{product.title}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default page;
