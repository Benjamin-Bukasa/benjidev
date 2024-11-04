import { FaConnectdevelop } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from '../ThemeContext';

const Logo = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className=" flex justify-Start items-center gap-1 font-semibold text-[30px]">
      <FaConnectdevelop size={30} className={`${theme ==='light'? 'text-[#000]':'text-[#fff]'}`} />
      <p className="">
        <span className={`${theme ==='light'? 'text-[#000]':'text-[#fff]'}`}>Benji </span><span className="text-[#C8F31D]">DevCreator</span>
      </p>
    </div>
  );
};

export default Logo;
