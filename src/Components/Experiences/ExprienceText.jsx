import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ExprienceText = () => {
  return (
    <div className='w-2/3 p-4 flex flex-col itemstatr justify-start gap-4'>
      <p className="">Mon parcours</p>
      <h3 className="text-[40px] w-2/3">Parcour et <span className='text-[#c7f324] '>Expérience professionnelle</span></h3>
      <div className="flex flex-col items-center justify-between gap-10 bg-[#232323] p-10">
        <div className="flex justify-start gap-10  w-full">
            <div className="w-1/2 flex  items-start gap-1">
                <IoIosArrowDroprightCircle size={20} />
                <div className="flex flex-col">
                  <p className="">2017-2019</p>
                  <p className="text-[#c7f324]">Opérateur des saisies et Dévloppeur Web (WordPress)</p>
                  <p className="">Imprimérie Top Copy Service</p>
                </div>
            </div>
            <div className="w-1/2 flex justify-start items-start gap-1">
                <IoIosArrowDroprightCircle size={20} />
                <div className="flex flex-col">
                  <p className="">2019-2023</p>
                  <p className="text-[#c7f324]">Développeur Web et web Mobile</p>
                  <p className="">Freelance (BenjiDevCreator)</p>
                </div>
            </div>
        </div>
        <div className="flex justify-start gap-10  w-full">
            <div className="w-1/2 flex  items-start gap-1">
                <IoIosArrowDroprightCircle size={20} />
                <div className="flex flex-col">
                  <p className="">2023-2024</p>
                  <p className="text-[#c7f324]">IT Support </p>
                  <p className="">Afrik Interim HR Services</p>
                </div>
            </div>
            <div className="w-1/2 flex justify-start items-start gap-1">
                <IoIosArrowDroprightCircle size={20} />
                <div className="flex flex-col">
                  <p className="">Actuellement</p>
                  <p className="text-[#c7f324]">Développeur Web et web Mobile</p>
                  <p className="">Afrik Interim HR Services</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ExprienceText
