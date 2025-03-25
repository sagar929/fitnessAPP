import React from "react";
import './Hero.css';
import Header from "./Header";
import hero_image from "../assets/hero_image.png"; 
import hero_image_back from "../assets/hero_image_back.png"; 
import Heart from "../assets/heart.png"; 
import Calories from "../assets/calories.png"; 

import {motion} from "framer-motion"

const Hero = () => {

    const transition = {type: 'spring' , duration:3}
    const mobile = window.innerWidth<=1316?true:false;

    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
             
                
                <div className="the-best-ad">
                    <motion.div
                    initial={{left: mobile? "178px" :'238px'}}
                    whileInView={{left: "8px"}}
                    transition={transition}
                    ></motion.div>
                    <span>The Best Fitness Club In The Town</span>
                </div>   

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>  
                    <div>
                        <span>Here, I will help you shape your ideal body and live your life to the fullest.</span>
                    </div>  
                </div>

                <div className="figures">
                    <div>
                        <span>10+</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>547+</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>50+</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div 
                initial ={{right: "-1rem"}}
                whileInView={{right: "4rem"}}
                transition={transition}
                viewport={{ once: false }} 
                className="heart-rate">
                    <img src={Heart} alt="Heart" />
                    <span>Heart Rate</span>
                    <span>116bpm</span>
                </motion.div>

                <img src={hero_image} alt="hero-image" className="hero-image"/>
                <img src={hero_image_back} alt="hero_image_back" className="hero-image-back" />

               <motion.div 
               initial={{right:"37rem"}}
               whileInView={{right:"28rem"}}
               transition={transition}
               className="calories">
                <img src={Calories} alt="Calories" />
                <div>
                <span>Calories burned</span>
                <span>220 Kcal</span>
                </div>
               
               </motion.div>
            </div>
        </div>
    );
};

export default Hero;
