import React from 'react'
import "./Servecies.css"
import img1 from "../../assets/theme_pattern.svg"
import service from "../../assets/services_data"

const Servecies = () => {
  return (
    <div className='servecies'>
      <div className="title">
        <h1>My Services</h1>
        <img src={img1} alt="" />
      </div>
      <div className="container">
        {service.map((service,index)=>{})}

      </div>
    </div>
  )
}

export default Servecies
