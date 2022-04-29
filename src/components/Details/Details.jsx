import React from 'react';
import { useParams } from 'react-router-dom';
import { BiLocationPlus, BiMedal, BiStar } from "react-icons/bi";
import styles from "./Details.module.css"

const Details = ({hotels}) => {
    const name = useParams().id;
    const hotelInfo = hotels.find(hotel => hotel.name === name)
    console.log(hotelInfo)
    return (
        <div className={styles.Detail}>
            <div className={styles.container}>
                <img src={hotelInfo.photo.images.large.url} alt="" />
                <h1>{name}</h1>
                <p>Location: <span>{hotelInfo.location_string}</span> <BiLocationPlus/> </p>
                <p>Rating: <span>{hotelInfo.rating}</span> <BiStar  className={styles.icon}/> </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque earum eveniet eum aliquam repudiandae quaerat cumque doloremque dolore deleniti.</p>
                <p>prices: <span>{hotelInfo.price}</span> </p>
                <p>timezone: <span>{hotelInfo.timezone}</span> </p>
                <p>Category: <span>{hotelInfo.subcategory_type}</span></p>
                <p>{hotelInfo.awards[0] && hotelInfo.awards[0].display_name}{hotelInfo.awards[0] && <BiMedal className={styles.icon}/>}</p>
            </div>
        </div>
    );
}
 
export default Details;