import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>this is profile section</h1>
      <h2>some links called next/link</h2>
      <ul>
        <li>
          <Link href={"profile/about"}>about</Link>
        </li>
        <li>
          <Link href={"profile/login"}>login</Link>
        </li>
        <li>
          <Link href={"profile/forgot-password"}>forgot-password</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
