import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousal.module.css";
import { useEffect } from "react";
// import Navigation from 'swiper/modules/navigation';
import { Navigation } from "swiper/modules";
// import CarouselLeftNavigation from "./CarousalLeftNavigation/CarousalLeftNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (data && data.length > 0) {
      swiper.slideTo(0); // Slide to the first item only if data is available
    }
  }, [data, swiper]); // Add swiper dependency to ensure effect runs after swiper is initialized

  return <></>; // Empty component as intended
};

const Carousal = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.Wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]} // Register the Navigation module
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        {/* <CarouselLeftNavigation/> */}
        {data.map((item) => (
          <SwiperSlide key={item.id || Math.random() * 1000000}>
            {renderCardComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;
