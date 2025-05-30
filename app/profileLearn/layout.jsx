import React from "react";
import ProfileSection from "./components/ProfileSection.jsx";

export const metadata = {
  title: "Profile Section",
  description: "this is profile section",
};

const layout = ({ children }) => {
  return (
    <div>
      {/* <div className="layout-effect">
        <h1> Layout simply means ... common component</h1>
        <h2>this is layout page which means it will show's everewhere</h2>
        <p>
          like whatever we write in app.js file in react js same thing we do it
          in layout . jsx file in next js
        </p>
      </div> */}
      <ProfileSection/>
      {children}
    </div>
  );
};

export default layout;
