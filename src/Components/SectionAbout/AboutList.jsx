import React from "react";
import { FaCheck } from "react-icons/fa";

const AboutList = () => {
  return (
    <ul className="w-full flex justify-around text-[14px] gap-5">
      <div className="w-1/2 flex flex-col justify-around items-start gap-2">
        <li className="flex justify-start items-center gap-4">
          <FaCheck size={20} className="text-[#c8f31d]" />
          <span className="">Développement des sites web</span>
        </li>
        <li className="flex justify-start items-center gap-4">
          <FaCheck size={20} className="text-[#c8f31d]" />
          <span className="">Web design et Branding</span>
        </li>
      </div>
      <div className="w-1/2 flex flex-col justify-around items-start gap-2">
        <li className="flex justify-start items-center gap-4">
          <FaCheck size={20} className="text-[#c8f31d]" />
          <span className="">Développement des applications web</span>
        </li>
        <li className="flex justify-start items-center gap-4">
          <FaCheck size={20} className="text-[#c8f31d]" />
          <span className="">Développement WordPress</span>
        </li>
      </div>
    </ul>
  );
};

export default AboutList;
