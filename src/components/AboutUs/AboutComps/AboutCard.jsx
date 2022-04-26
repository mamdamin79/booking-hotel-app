import React from 'react';
// styles
import styles from './AboutCard.module.css'
const AboutCard = ({image,title,keyword}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image} alt="" />
            </div>
            <div className={styles.contentContainer}>
                <h3>{keyword}</h3>
                <h4 className={styles.title}>{title}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem maiores voluptatibus velit ut ea sapiente quod dignissimos blanditiis nesciunt perspiciatis!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sunt dolores tempora officiis. Quaerat quas placeat reprehenderit! Molestiae, molestias iusto.</p>
                <button className={styles.exploreButton}>Explore More </button>
            </div>
        </div>
    );
}
 
export default AboutCard;