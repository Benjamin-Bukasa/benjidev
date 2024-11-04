import MenuItems from "./MenuItems";
import { useContext } from "react";
import { ThemeContext } from '../../ThemeContext';


const Menu = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`w-1/5 h-full rounded-xl ${theme === 'light'?"bg-zinc-100":"bg-[#2a2a2a]"} `}>
      <MenuItems />
    </div>
  );
};

export default Menu;
