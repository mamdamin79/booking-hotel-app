import React from 'react';
// styles
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import styles from "./MostPopular.module.css"
import HotelCard from '../../../Destination/destinationcard/HotelCard';
const MostPopular = ({hotels}) => {
    return (
        <section className={styles.section}>
            <h1>Most Popular hotel</h1>
            <p>--------------------------------</p>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {hotels.length >0 && hotels.filter(hotel => typeof(hotel.photo) === 'object').slice(0,9).map(hotel=> <SwiperSlide><HotelCard info={hotel} /></SwiperSlide>) }
      </Swiper>
        </section>
    );
}
 
export default MostPopular;