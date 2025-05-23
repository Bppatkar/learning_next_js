import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>this is a product page</h1>
      <ul>
        <li>
          <Link href={"/product/tv's"}>Tv's</Link>
        </li>
        <li>
          <Link href={"/product/phone"}>phone</Link>
        </li>
        <li>
          <Link href={"/product/laptop"}>laptop</Link>
        </li>
        <li>
          <Link href={"/product/ipad"}>ipad</Link>
        </li>
        <li>
          <Link href={"/product/desktop"}>desktop</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
