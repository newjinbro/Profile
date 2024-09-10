import React from 'react'
import './hero.css'
import Profile from '../../asset/profile.jpg'
import  HTML from '../../asset/img1.png'
import  CSS5 from '../../asset/img2.png'
import  Bootstrap from '../../asset/img3.png'
import  Js from '../../asset/img4.png'
import  Reactjs from '../../asset/img5.png'


export const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h1>NEWJIN BRO</h1>
            <p> Passinate Front-End Developer | Transforming Ideas Into Seamless | Visually Stunning Web Solutions</p>

        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={Reactjs} alt="#" />
                </div>
                <div className="tech-profile">
                    <img src={Profile} alt="#" />
                </div>
            </div>
            <div>
                <div className="tech-icon">
                    <img src={HTML} alt="#" />
                </div>
                <div className="tech-icon">
                    <img src={CSS5} alt="#" />
                </div>
                <div className="tech-icon">
                    <img src={Bootstrap} alt="#" />
                </div>
                <div className="tech-icon">
                    <img src={Js} alt="#" />
                </div>
            </div>
        </div>
    </section>
  )
}
