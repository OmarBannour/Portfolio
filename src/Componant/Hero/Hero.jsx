import React from 'react'
import "./Hero.css"
import pic from'../../assets/omarr.jpg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={pic} alt="" className='pic' />
        <h1><span>I am Omar Bannour</span> , Full-Stack Developer and IoT Solutions Architect based in Tunisia </h1>
        <p> I am a full stack developer from Tunisia,Monastir </p>
        <div className="hero-action">
            <div className="connect-btn">Connect with me </div>
            <div className="resume-btn">My resume</div>
        </div>
      
    </div>
  )
}
import "./Hero.css"
export default Hero
