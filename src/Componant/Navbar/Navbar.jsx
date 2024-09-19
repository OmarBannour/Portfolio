import React, { useState } from "react";
import "./Navbar.css";
import img from "../../assets/omar.jpg";
import pic from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  

  return (
    <div className="navbar">
      <img src={img} alt="" className="img" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="link " href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={pic} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="link " offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={pic} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="link " offset={50} href="#service">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={pic} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="link " offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={pic} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="link " offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={pic} alt="" /> : <></>}
        </li>
      </ul>
      <div className="btn">
        <AnchorLink className="link" offset={50} href="#contact" onClick={() => setMenu("contact")}>
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;