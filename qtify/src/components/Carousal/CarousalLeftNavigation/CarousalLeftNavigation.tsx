import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
// import { ReactComponent as LeftNav } from "../../../assets/leftNav.svg";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import styles from "./Carousal.module.css";
import "./Carousal.module.css"


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
    <div className="leftNavigation">
      {!isBegining && <KeyboardBackspaceIcon onClick={() => swiper.slidePrev()} />}
    </div>
  );
}