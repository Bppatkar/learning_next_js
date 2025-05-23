import React from "react";

import Link from "next/link.js";

const page = () => {
  return (
    <div>
      <h1 className="main_heading">this is a next js page file</h1>
      <ul>
        <li>
          <Link href={"/profile"}> go to profile</Link>
        </li>
        <li>
          <Link href={"/product"}>product</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
