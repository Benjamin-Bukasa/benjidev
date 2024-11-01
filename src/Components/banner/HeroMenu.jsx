import Menu from "./Menu";
import SomeNumbers from "./SomeNumbers";

const HeroMenu = () => {
  return (
    <div className="w-1/4 h-full flex justify-end items-center gap-10 py-1">
      <SomeNumbers />
      <Menu />
    </div>
  );
};

export default HeroMenu;
