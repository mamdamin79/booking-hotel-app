import React from 'react';
// styles
import styles from './Work.module.css'
// images
import work1 from "../../../../assets/images/work-1.png";
import work2 from "../../../../assets/images/work-2.png";
import work3 from "../../../../assets/images/work-3.png";
const Work = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={work1} alt="" />
                <h4>Search Multiple Destination</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laudantium!</p> 

            </div>
            <div className={styles.card}>
                <img src={work2} alt="" />
                <h4>Find the lowest Hotel Price.</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident.</p>
            </div>
            <div className={styles.card}>
                <img src={work3} alt="" />
                <h4>Find The Right Hotel For You.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, facere?</p>
            </div>
        </div>
    );
}
 
export default Work;