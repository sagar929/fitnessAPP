import React, { useState } from 'react';
import './Header.css';
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 1316;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      {/* Remove this line if you don't want the logo */}
      <img src={Logo} alt="Logo" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div 
          style={{ backgroundColor: 'var(--appColor)', padding: "0.5rem", borderRadius: "5px" }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="Bars" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpened(false)}>Home</li>
          <li onClick={() => setMenuOpened(false)}>Programs</li>
          <li onClick={() => setMenuOpened(false)}>Why Us</li>
          <li onClick={() => setMenuOpened(false)}>Plans</li>
          <li onClick={() => setMenuOpened(false)}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
