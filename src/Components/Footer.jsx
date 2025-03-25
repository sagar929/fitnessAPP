import React from 'react'
import './Footer.css'
import Github from "../assets/github.png"
import Instagram from "../assets/instagram.png"
import LinkedIn from "../assets/linkedin.png"
import Logo from "../assets/logo.png"
export default function Footer() {
    return (
        <div className='Footer-container'>
          <hr />
          <div className="footer">
            <a href="https://github.com/sagar929" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="Github" />
            </a>
            <a href="https://www.instagram.com/sagarsharma5252/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/sagar-sharma-172678317/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          <div className="logo-f">
            
              <img src={Logo} alt="Logo" />
    
          </div>
          <div className="blur blur-f-1"></div>
          <div className="blur blur-f-2"></div>
        </div>
      );
      
}
