import React from 'react';
import LocationBar from '../LocationBar/LocationBar';
import TestimonialCard from './TestimonialCard/TestimonialCard';
// styles
import styles from './Testimonial.module.css'
const Testimonial = ({users}) => {
    return (
        <>
            <LocationBar/>
            <div className={styles.container}>
                {users.length > 0 ? users.map(user => <TestimonialCard info={user} key={user.id}/>): <h2 className={styles.loading}>Loading...</h2>}
            </div>
        </>
    );
}
 
export default Testimonial;