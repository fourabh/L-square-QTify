import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import LeftIcon from "../svg/LeftIcon";
import styles from "./Carousel.module.css";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);

    
    handleSlideChange();

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={`${styles.leftNavigation} leftNavigation`}>
      {!isBeginning && <LeftIcon onClick={() => swiper.slidePrev()} />}
    </div>
  );
}
