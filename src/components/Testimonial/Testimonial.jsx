import React from 'react';
import LocationBar from '../LocationBar/LocationBar';
import TestimonialCard from './TestimonialCard/TestimonialCard';
// styles
import styles from './Testimonial.module.css'
const Testimonial = ({users}) => {
    console.log(users)
    return (
        <>
            <LocationBar/>
            <div className={styles.container}>
                {users.map(user => <TestimonialCard info={user} key={user.id}/>)}
            </div>
        </>
    );
}
 
export default Testimonial;