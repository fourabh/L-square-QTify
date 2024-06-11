import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
// import Carousal from "../Carousal/Carousal";

const Section = ({ type, title, data }) => {
  const [carosalToggle, setCarosalToggle] = useState(true);

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

  // const renderCarousal = () => (
  //   <Carousal
  //     renderCardComponent={(item) => (
  //       <Card key={item.id} data={item} type={type} />
  //     )}
  //   />
  // );

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {/* {carosalToggle ? "Show all" : "Collapse all"} */}
          {"Show all"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {/* {!carosalToggle ? renderCards() : renderCarousal()} */}
          {renderCards()}
        </div>
      )}
    </div>
  );
};

export default Section;
