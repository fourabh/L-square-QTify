import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"; 
import styles from "./Carousel.module.css";



export default function Carousel({ data, renderCardComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        // style={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={7}
        spaceBetween={30}
        allowTouchMove
        modules={[Navigation]}
        navigation={{ nextEl: '.rightNavigation', prevEl: '.leftNavigation' }}
      >
        <CarouselRightNavigation />
        <CarouselLeftNavigation />

        {data.map((item, idx) => (
          <SwiperSlide key={idx}>{renderCardComponent(item)}</SwiperSlide>
        ))}
       
      </Swiper>
    </div>
  );
}
