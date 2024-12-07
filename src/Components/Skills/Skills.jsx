import React from 'react'
import SkillsText from './SkillsText'
import SkillTech from './SkillTech'

function Skills() {
  return (
    <div className='flex justify-between items-center gap-5 dark:bg-black p-20'>
        <SkillsText/>
        <SkillTech/>
    </div>
  )
}

export default Skills