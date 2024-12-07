import React from 'react'
import Figma from '../../images/figma.png'
import Tailwindcss from '../../images/tailwindcss.png'
import Framer from '../../images/Framer.png'
import Wordpress from '../../images/wordpress.png'
import MongoDB from '../../images/mongoDB.png'
import Expressjs from '../../images/expressjs.png'
import Reactjs from '../../images/reactjs.png'
import Nodejs from '../../images/nodejs.png'


const skillsAssets = [
    {
        id:1,
        title:"Figma",
        icon:{Figma},
        level:"75%"
    },
    {
        id:2,
        title:"Tailwindcss",
        icon:{Tailwindcss},
        level:"75%"
    },
    {
        id:3,
        title:"Framer",
        icon:{Framer},
        level:"65%"
    },
    {
        id:4,
        title:"WordPress",
        icon:{Wordpress},
        level:"90%"
    },
    {
        id:5,
        title:"MongoDB",
        icon:{MongoDB},
        level:"75%"
    },
    {
        id:6,
        title:"Express JS",
        icon:{Expressjs},
        level:"75%"
    },
    {
        id:7,
        title:"React JS",
        icon:{Reactjs},
        level:"85%"
    },
    {
        id:8,
        title:"Node JS",
        icon:{Nodejs},
        level:"65%"
    },
]

const SkillTech = () => {
  return (
    <div className='w-[50%] flex flex-wrap justify-around items-center gap-1'>
        {
            skillsAssets.map((item)=>(
                <div className="w-1/5 p-3 dark:bg-[#232323] rounded rounded-xl text-center" key={item.id}>
                    <img src={item.icon}/>
                    <p className="">{item.title}</p>
                    <p className="">{item.level}</p>
                </div>
            ))
        }
    </div>
  )
}

export default SkillTech