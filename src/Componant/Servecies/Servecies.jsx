import React from 'react'
import "./Servecies.css"
import img1 from "../../assets/theme_pattern.svg"
import service from "../../assets/services_data"
import img2 from "../../assets/arrow_icon.svg"

const Servecies = () => {
  return (
    <div id='service' className='servecies'>
      <div className="title">
        <h1>My Services</h1>
        <img src={img1} alt="" />
      </div>
      <div className="container">
        {service.map((service,index)=>{
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-read">
                    <p>Read More</p>
                    <img src={img2} alt="" />
                </div>

            </div>
        })}

      </div>
    </div>
  )
}

export default Servecies
