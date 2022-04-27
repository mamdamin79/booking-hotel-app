import React from 'react';
import styles from './HotelCard.module.css'
const HotelCard = ({info}) => {
    return (
        <div className={styles.container}>
            <img src={info.photo.images.large.url} alt="hotelImage" />
            <h1>{info.name}</h1>
        </div>
    );
}
 
export default HotelCard;