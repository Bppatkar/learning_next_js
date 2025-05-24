import React from "react";
import CourseList from "./components/CourseList";

export const metadata = {
  title: "CourseZone Project",
  description: "this is section where you can find all the courses",
};

const page = () => {
  return (
    <div>
      <CourseList/>
    </div>
  );
};

export default page;
