import React from 'react'
import Button from '../Button'

const SkillsText = () => {
  return (
    <div className='w-[50%] flex flex-col gap'>
        <p className="comment">Mes compétences</p>
        <h3 className="text-[45px] leading-[60px]">Explore quelques de mes <span className="text-[#c7f324]">Hardskills & Experience</span></h3>
        <p className="text-zinc-500 text-[13px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus, sit laudantium nesciunt eaque saepe libero quia doloribus dolorem impedit laborum facilis eius asperiores natus sequi reprehenderit repudiandae velit placeat.</p>
        <Button boutonContent ="En savoir plus" className="w-40%"/>
    </div>
  )
}

export default SkillsText