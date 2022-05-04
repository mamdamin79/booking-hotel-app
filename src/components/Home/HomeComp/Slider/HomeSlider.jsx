import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
// import slider image
import slide1 from "../../../../assets/images/slider-1.jpg";
import slide2 from "../../../../assets/images/slider-2.jpg"
import slide3 from "../../../../assets/images/slider-3.jpg"

const HomeSlider = () => {
    return (
        <>
            <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper1"
      >
        <SwiperSlide><img src={slide1} alt="sliderImage" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="sliderImage" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="sliderImage" /></SwiperSlide>
      </Swiper>
        </>
    );
}
 
export default HomeSlider ;

