import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import RightIcon from "../svg/RightIcon";
import styles from "./Carousel.module.css";
 
export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    
    handleSlideChange();

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={`${styles.rightNavigation} rightNavigation`}>
      {!isEnd && <RightIcon onClick={() => swiper.slideNext()} />}
    </div>
  );
}
