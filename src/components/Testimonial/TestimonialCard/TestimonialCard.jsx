import React from 'react';
// styles
import styles from './TestimonialCard.module.css'
const TestimonialCard = ({info}) => {
    return (
        <div className={styles.container}>
            <p className={styles.message}>{info.message}</p>
            <div className={styles.contentContainer}>
                <img src={info.avatar} alt="avatar" />
                <div >
                    <h3>{info.name}</h3>
                    <p>{info.designation}</p>
                </div>
            </div>
        </div>
    );
}
 
export default TestimonialCard;