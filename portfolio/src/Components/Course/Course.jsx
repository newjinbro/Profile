import React from 'react';
import './course.css';
import courseData from '../utlis/course.json';
import { CourseCard } from './CourseCard';

export const Course = () => {
    // const settings={
    //     dot:false,
    //     infinite:true,
    //     speed:500,
    //     slidesToShow: 2,
    // slidesToScroll: 1,
    // arrow:false,
    // responsive:{
    //     breakpoint:769,
    //     settings:{
    //         slidesToShow:1,
    //         slidesToScroll:1
    //     }
    // }
    // }

  return (
    <section className="Course-Container">
        <h4>Course</h4>
        <div className="Course-content">
            <CourseCard details={courseData} />
        </div>
    </section>
  );
};

