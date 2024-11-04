import { MdOutlineLightMode } from "react-icons/md";
// import { PiToggleLeftFill } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";
import { useContext } from "react";
import { ThemeContext } from '../../ThemeContext';

const ThemeMode = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-start gap-2">
      <MdOutlineLightMode size={25} onClick={toggleTheme}/>
      {/* <PiToggleLeftFill size={35} className="text-[#C8F31D]" /> */}
      <span className="text-white">{theme === 'light' ? 'Light' : 'Dark'}</span>
      <div className="flex justify-start items-center px-2 py-2 rounded-full bg-[#c7f324] text-black">
        <RiMenu2Fill size={25} />
      </div>
    </div>
  );
};

export default ThemeMode;
