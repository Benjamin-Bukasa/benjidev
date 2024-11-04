import Hero from "./Components/banner/Hero";
import Navbar from "./Components/banner/Navbar";
import Experience from "./Components/Experiences/Experience";
import About  from "./Components/SectionAbout/About";
import Service from "./Components/Services/Service";
import { useState } from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { PiToggleLeftFill } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";

function App() {

  const [mode, setMode] = useState(false)

  const theme = ()=>{
    setMode(!mode)
  }

  return (
    <>
      <div className={`w-full px-20 py-0 flex flex-col justify-start items-start gap-5 ${mode ?`bg-[#131313]  transition ease-in-out`:` bg-[#f2f2f2] transition ease-in-out`}`}>
        {/* <Navbar/> */}
        <nav className="w-full flex justify-between items-center py-4 px-1">
          {/* bloc du logo */}
          <div className=" flex justify-Start items-center gap-1 text-[#C8F31D] font-semibold text-[30px]">
            <FaConnectdevelop size={30} />
            <p className="">
              Benji <span className="text-[#C8F31D]">DevCreator</span>
            </p>
          </div>

        {/* Bloc des réseau sociaux */}
          <div className="flex justify-between items-center gap-10">
            <FaGithub
              size={20}
              className="hover:text-[#c7f324] hover:opacity-1 cursor-pointer"
            />
            <IoLogoLinkedin
              size={20}
              className="hover:text-[#c7f324] hover:opacity-1 cursor-pointer"
            />
            <FaSquareInstagram
              size={20}
              className="hover:text-[#c7f324] hover:opacity-1 cursor-pointer"
            />
            <FaSquareFacebook
              size={20}
              className="hover:text-[#c7f324] hover:opacity-1 cursor-pointer"
            />
          </div>

          {/* Bloc de theme  */}
          <div className="flex items-center justify-start gap-2">
            <MdOutlineLightMode size={25} className="cursor-pointer" onClick={theme}/>
            <PiToggleLeftFill size={35} className="text-[#C8F31D] cursor-pointer" />
            <span className="text-white">Light</span>
            <div className="flex justify-start items-center px-2 py-2 rounded-full bg-[#c7f324] text-black">
              <RiMenu2Fill size={25} />
            </div>
          </div>
          
        </nav>
        <Hero  theme={mode}/>
        <About  theme={mode}/>
        <Experience theme={mode}/>
        <Service theme={mode}/>
      </div>
    </>
  );
}

export default App;
