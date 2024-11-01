import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ExprienceText = () => {
  return (
    <div className='w-1/2 p-4 flex flex-col itemstatr justify-start gap-4'>
      <p className="">Mon parcours</p>
      <h3 className="">Parcour et <span className='text-[#c7f324]'>Expérience professionnelle</span></h3>
      <div className="flex flex-wrap bg-[#]">
        <div className="">
            <IoIosArrowDroprightCircle />
            <p className="">2017-2019</p>
            <p className="">Opérateur des saisies et Dévloppeur Web (WordPress)</p>
            <p className="">Imprimérie Top Copy Service</p>
        </div>
        <div className="">
            <IoIosArrowDroprightCircle />
            <p className="">2019-2023</p>
            <p className="">Développeur Web et web Mobile</p>
            <p className="">Freelance (BenjiDevCreator)</p>
        </div><div className="">
            <IoIosArrowDroprightCircle />
            <p className="">Avril - Juillet 2023</p>
            <p className="">IT Support </p>
            <p className="">Afrik Interim HR Services </p>
        </div><div className="">
            <IoIosArrowDroprightCircle />
            <p className="">Juillet 2024 - Actuellement</p>
            <p className="">Développeur Web</p>
            <p className="">Afrik Interim HR Services</p>
        </div>
      </div>
    </div>
  )
}

export default ExprienceText
