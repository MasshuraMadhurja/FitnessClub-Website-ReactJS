import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const transition = { type: "spring", duration: 3 };
const mobile = window.innerWidth <= 768 ? true : false;

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      {/* Left side of Hero section */}
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "165px" : "239px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal</span>
            <span>Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your Ideal body and
              live our life to fullest.
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter start={100} end={140} delay="4" preFix="+" />
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>
              <NumberCounter start={800} end={978} delay="4" preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              <NumberCounter start={0} end={50} delay="4" preFix="+" />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* hero button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* right side of Hero section */}

      <div className="right-h">
        <Link to="join" className="btn">
          Join Now
        </Link>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="heart-img" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          src={hero_image_back}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          alt=""
          className="hero-image-back "
        />

        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={{ transition }}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
