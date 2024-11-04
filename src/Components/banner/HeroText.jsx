import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 leading-1 w-1/3">
      <div className="">
        <p className="opacity-50 text-[25px]">Salut, je suis</p>
        <h1 className=" font-semibold text-[45px] leading-[60px]">
          <span className="text-[#c8f31d]">Benjamin Kabeya{" "}</span>
          <span className="font-semibold dark:text-white">Développeur Web</span>
        </h1>
      </div>
      <p className="opacity-50 leading-6">
        Développeur web avec une expérience de plus de 5 ans, accès sur le web
        design et le développement d'interfaces front-end
      </p>
      <div className="w-full flex justify-start items-center gap-6">
        <Button boutonContent="Contactez-moi"/>
        <Link to="/" className="font-semibold underline text-[13px]">
          Télécharger mon cv
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
