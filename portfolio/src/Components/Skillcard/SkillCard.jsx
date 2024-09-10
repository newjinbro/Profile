import React from 'react'
import './skillCard.css'

export const SkillCard = ({title,iconUrl,isActive,onclick}) => {
  return (
    <div
    
    className={`skills-card  ${isActive? "active":""}`}
    onClick={()=>onclick()}
        >
        <div className='skills-icon'>
            <img src={iconUrl} alt={title} />
        </div>
        <span>{title}</span>
    </div>
  )
}
