import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
// import { ReactComponent as RightArrow } from "../../assets/right.svg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import  "./Carousal.module.css";


export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);
  return (
    <div className="rightNavigation">
      {!isEnd && <ArrowRightAltIcon onClick={() => swiper.slideNext()} />}
    </div>
  );
}