import Number from "./Number";
import { useContext } from "react";
import { ThemeContext } from '../../ThemeContext';

const SomeNumbers = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`w-2/4 h-full px-4 divide-y divide-zinc-800 dark:bg-black rounded-xl ${theme === 'light'?"bg-zinc-100":"bg-[#2a2a2a]"}`}>
      <Number number={5} comment="années d'expérience" sign="+" />
      <Number number={10} comment="grand projets participés" sign="+" />
      <Number number={99} comment="clients satisfaits" sign="%" />
    </div>
  );
};

export default SomeNumbers;
