import Logo from "../Logo";
import SocialMedia from "./SocialMedia";
import ThemeMode from "./ThemeMode";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center py-4 px-1">
      <Logo />
      <SocialMedia />
      <ThemeMode />
    </div>
  );
}

export default Navbar;
