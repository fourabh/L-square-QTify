import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousal from "../Carousel/Carousel";

const Section = ({ type, title, data }) => {
  const [carosalToggle, setCarosalToggle] = useState(false);

  const handleToggle = () => {
    setCarosalToggle(!carosalToggle);
  };

  const renderCards = () => (
    <div className={styles.wrapper}>
      {data.map((item) => (
        <Card key={item.id} data={item} type={type} />
      ))}
    </div>
  );

  const renderCarousal = () => (
    <Carousal
      renderCardComponent={(item) => (
        <Card key={item.id} data={item} type={type} />
      )}
      data={data}
    />
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 style={{color:"white"}}>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carosalToggle ? "Show all" : "Collapse"}
          
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carosalToggle ? renderCards() : renderCarousal()}
          {/* {renderCards()} */}
        </div>
      )}
    </div>
  );
};

export default Section;
