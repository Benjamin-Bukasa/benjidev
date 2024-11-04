import { MdOutlineLightMode } from "react-icons/md";
import { PiToggleLeftFill } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";

const ThemeMode = () => {
  return (
    <div className="flex items-center justify-start gap-2">
      <MdOutlineLightMode size={25}/>
      <PiToggleLeftFill size={35} className="text-[#C8F31D]" />
      <span className="text-white">Light</span>
      <div className="flex justify-start items-center px-2 py-2 rounded-full bg-[#c7f324] text-black">
        <RiMenu2Fill size={25} />
      </div>
    </div>
  );
};

export default ThemeMode;
