import React from 'react'
import "./About.css"
import img from "../../assets/theme_pattern.svg"
import pic from'../../assets/omarr.jpg'

const About = () => {
  return (
    <div id='about' className= 'about' >
        <div className="about-title">
            <h1>About me </h1>
            <img src={img} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={pic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I have a growing experience in web development and embedded systems. My passion lies in both frontend and backend development, and I am continuously expanding my skills in these areas.</p>
                    <p>I approach every project with enthusiasm and dedication, eager to learn and contribute to its success.</p>
                </div>
                <div className="about-skill">
                 <div className="skills"><p>HTML & CSS</p> <hr style={{width:"70%"}}/></div>  
                 <div className="skills"><p>JavaScript</p> <hr style={{width:"60%"}}/></div>  
                 <div className="skills"><p>React JS</p> <hr style={{width:"90%"}}/></div>  
                 <div className="skills"><p>Node JS</p> <hr style={{width:"50%"}}/></div>  
                 <div className="skills"><p>MySQL</p> <hr style={{width:"80%"}}/></div>  
                 <div className="skills"><p>Git & Github</p> <hr style={{width:"90%"}}/></div>  
                 <div className="skills"><p>Arduino</p> <hr style={{width:"40%"}}/></div>  
                 <div className="skills"><p>Python</p> <hr style={{width:"50%"}}/></div>  
                   

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
