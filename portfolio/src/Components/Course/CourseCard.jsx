import React from 'react';
import './courseCard.css';

export const CourseCard = ({ details }) => {
  return (
    <div className="course-card">
        <h5>{details.title}</h5>
        <div className="duration">{details.Date}</div>
        <ul>
            {details.Responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  );
};
