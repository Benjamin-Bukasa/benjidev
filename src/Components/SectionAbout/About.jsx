import React from "react";
import AboutText from "./AboutText";
import AboutImage from "./AboutImage";

export const About = () => {
  return (
    <div className="w-full flex dark:bg-black bg-zinc-100 p-20">
      <AboutText />
      <AboutImage/>
    </div>
  );
};

export default About
