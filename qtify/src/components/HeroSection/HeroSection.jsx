import React from "react";
import Styles from "./HeroSection.module.css";
import VibratingHeadphone from "../../assets/vibratingHeadphone.svg";

const HeroSection = () => {
  return (
    <div className={Styles.HeroContainer}>
      <div className={Styles.HeroText}>
        <div>100 Thousand Songs, ad-free</div>
        <div>Over thousands podcast episodes</div>
      </div>
      <img src={VibratingHeadphone} alt="VibratingHeadphone" />
    </div>
  );
};

export default HeroSection;
