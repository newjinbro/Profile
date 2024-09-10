import React from 'react';
import './skill.css';
import SkillData from '../utlis/data.json';
import { SkillCard } from './SkillCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Skillsinfo } from './Skillsinfo/Skillsinfo';

export const Skills = () => {
    const [selectedSkills,setSelectedSkills]=useState(SkillData[0])
    const handleSekectedSkill=(data)=>{
        setSelectedSkills(data)
    }
  return (
    <section className="skills-container container">
        <h4>Technical Proficiency</h4>
        <div className='skills-content'>
            <div className="skills">
                {SkillData.map((item) => (
                    <SkillCard 
                        key={item.title} 
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkills.title===item.title}
                        onclick={()=>{
                            handleSekectedSkill(item)
                        }}
                    />
                ))}
            </div>
            <div className='skills-info'>
                <Skillsinfo
                heading={selectedSkills.title}
                skills={selectedSkills.skills}
                />
            </div>
        </div>
    </section>
  );
};
