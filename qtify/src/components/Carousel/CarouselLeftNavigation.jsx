import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import LeftIcon from "../svg/LeftIcon";
import styles from "./Carousel.module.css";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegining(swiper.isBeginning);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);
  return (
    <div className={styles.leftNavigation}>
      {!isBegining && <LeftIcon onClick={() => swiper.slidePrev()} />}
    </div>
  );
}
