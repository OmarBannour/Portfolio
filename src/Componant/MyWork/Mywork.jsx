import React from 'react';
import './Mywork.css';
import img1 from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data'
import img2 from "../../assets/arrow_icon.svg"

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title">
        <h1>MY LATEST WORK</h1>
        <img src={img1} alt="pattern" />
      </div>
      <div className="mywork-list">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-format">
              <h3>{work.w_no}</h3>
              <h2>{work.w_name}</h2>
              <p>{work.w_desc}</p>
            </div>
          );
        })}
        
      </div>
      <div className="btn2">See More<img src={img2} alt="" /></div>
      
    </div>
  );
}

export default Mywork;
