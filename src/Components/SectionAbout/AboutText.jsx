import React from "react";
import AboutList from "./AboutList";
import AboutContact from "./AboutContact";

const AboutText = () => {
  return (
    <div className="w-1/2 flex flex-col gap-8">
      <div className="flex flex-col justify-start items-start gap-1">
        <p className="opacity-50 text-[16px]">A propos de moi</p>
        <h2 className="text-[40px] leading-[55px]">
          Web designer et{" "}
          <span className="text-[#c8f31d]">Développeur web et Web mobile </span>{" "}
          Full-stack
        </h2>
      </div>
      <div className="text-zinc-500 text-[13px] text-justify">
        Diplômé de Kadea Academy en développement web et web mobile depuis 2024,
        ayant des compétences hardskill basées sur les technologies de
        développement web très récentes (NodeJS, NextJS, ReactJS, Express,
        etc...) mais également des softskills permettants de travailler en
        autonmie, travailler en equipe et s'adapter à l'environnement de travail
        tout en étant proactif et résilient.
      </div>
      <div className="w-full flex flex-col">
        <AboutList />
      </div>
      <div className="w-full bg-[#232323] border-[#424242] px-4 py-1 rounded-xl">
        <AboutContact />
      </div>
    </div>
  );
};

export default AboutText;
