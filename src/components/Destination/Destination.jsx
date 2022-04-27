import React from 'react';
import { v4 } from 'uuid';
// comp
import HotelCard from './destinationcard/HotelCard'
import LocationBar from '../LocationBar/LocationBar';
// styles
import styles from './Destination.module.css'
const Destination = ({hotels}) => {
    console.log(hotels)
    return (
        <>
            <LocationBar/>
            <div className={styles.container}>
                {hotels.length > 0 && hotels.filter(hotel => typeof(hotel.photo) === 'object').map(hotel=> <HotelCard key={v4()} info={hotel} />)}
            </div>
        </>
    );
}
 
export default Destination;