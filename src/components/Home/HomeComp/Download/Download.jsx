import React from 'react';
// styles
import styles from "./Download.module.css"
// images
import appImage from "../../../../assets/images/app-image-1.png";
import appStore from "../../../../assets/images/appstore-button.png";
import playStore from "../../../../assets/images/google-play-button.png";
const Download = () => {
    return (
        <section className={styles.container}>
            <div>
                <p>download our app</p>
                <h3>wow! Get This Template App For Your Mobile.</h3>
                <ul>
                    <li>
                        Find nearby hotels in your network with template.
                    </li>
                    <li>
                        Get paperless confirmation.
                    </li>
                    <li>
                        makes change whenever,wherever.
                    </li>
                    <li>
                        no booking or credit card fees
                    </li>
                    <li>
                        add your own reviews and photos
                    </li>
                    <li>
                        24 costumers services in more than 40 languages
                    </li>
                </ul>
                <div className={styles.storecontainer}>
                    <img src={appStore} alt="" />
                    <img src={playStore} alt="" />
                </div>
            </div>
            <div className={styles.appimage}>
                <img src={appImage} alt="" />
            </div>
        </section>
    );
}
 
export default Download;