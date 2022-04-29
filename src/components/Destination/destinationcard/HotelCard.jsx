import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HotelCard.module.css'
const HotelCard = ({info}) => {
    return (
        <div className={styles.container}>
            <img src={info.photo.images.large.url} alt="hotelImage" />
            <h2>{info.name.split(' ')[0]+" "+info.name.split(' ')[1]}</h2>
            <h3>{info.location_string}</h3>
            <Link to={`destination/${info.name}`}>more</Link>
        </div>
    );
}
 
export default HotelCard;