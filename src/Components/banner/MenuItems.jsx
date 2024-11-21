import MenuItem from "./MenuItem";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { IoLayersOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { FaDraftingCompass } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from '../../ThemeContext';

const MenuItems = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`p-1`}>
      <MenuItem
        icon={<IoHomeOutline size={30} />}
        text="Accueil"
        style="w-full opacity flex flex-col justify-center items-center gap-2 py-5 text-black bg-[#c7f324] rounded-xl cursor-pointer"
      />
      <MenuItem
        icon={<FaRegUser size={30} />}
        text="A propos"
        style="w-full opacity-50 flex flex-col justify-center items-center gap-2 py-5 rounded-xl cursor-pointer"
      />
      <MenuItem
        icon={<SlSettings size={30} />}
        text="Services"
        style="w-full opacity-50 flex flex-col justify-center items-center gap-2 py-5 rounded-xl cursor-pointer"
      />
      <MenuItem
        icon={<IoLayersOutline size={30} />}
        text="Savoirs"
        style="w-full opacity-50 flex flex-col justify-center items-center gap-2 py-5 rounded-xl cursor-pointer"
      />
      <MenuItem
        icon={<FaDraftingCompass size={30} />}
        text="Portfolio"
        style="w-full opacity-50 flex flex-col justify-center items-center gap-2 py-5 rounded-xl cursor-pointer"
      />
      <MenuItem
        icon={<BsChatDots size={30} />}
        text="Contact"
        style="w-full opacity-50 flex flex-col justify-center items-center gap-2 py-5 rounded-xl cursor-pointer"
      />
    </div>
  );
};

export default MenuItems;
