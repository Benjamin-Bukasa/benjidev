import myHeroImage from "../../images/myHeroImage.png";

const HeroImage = () => {
  return (
    <div className="w-1/3">
      <img src={myHeroImage} alt="" className="w-full" />
    </div>
  );
};

export default HeroImage;
