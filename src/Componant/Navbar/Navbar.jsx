import React from 'react';
import "./Navbar.css";
import img from "../../assets/omar.jpg";  // Make sure this path is correct

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={img} alt="" className='img' />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="btn">Connect with Me</div>
    </div>
  );
}

export default Navbar;
