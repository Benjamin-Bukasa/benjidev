import HeroImage from "./HeroImage";
import HeroMenu from "./HeroMenu";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="w-full flex justify-between items-center gap-2 py-8">
      <HeroText />
      <HeroImage />
      <HeroMenu />
    </div>
  );
};

export default Hero;
