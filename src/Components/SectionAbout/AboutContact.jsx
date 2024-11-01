import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneEnabled } from "react-icons/md";

const AboutContact = () => {
  return (
    <div className="flex justify-around items-center py-2">
      <div className="w-1/2 flex justify-start items-center gap-4 ">
        <div className="rounded-full p-2 bg-[#c8f31d] text-black">
          <CiMail />
        </div>
        <div className="flex flex-col text-[12px]" translate="no">
          <p className="">Email</p>
          <p className="opacity-50">bukasabenjamin6@gmail.com</p>
        </div>
      </div>
      <div className="w-1/2 flex justify-start items-center gap-4 ">
        <div className="rounded-full p-2 bg-[#c8f31d] text-black">
          <MdOutlinePhoneEnabled />
        </div>
        <div className="flex flex-col text-[12px]">
          <p className="">Email</p>
          <p className="opacity-50">bukasabenjamin6@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
