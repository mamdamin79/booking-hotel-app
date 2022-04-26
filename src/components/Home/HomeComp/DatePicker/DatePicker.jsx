import React from 'react';
import styles from './DatePicker.module.css'
const DatePicker = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Enjoy your Holidays</h1>
            <p className={styles.subTitle}>Search and book a hotel</p>
            <input type="text" placeholder='search a city' />
            <div>
                <input type="date" placeholder="check in" />
                <input type="date" placeholder="check out" />
            </div>
            <input type="number" placeholder="rooms qnty" />
            <button className={styles.search}>Search</button>
        </div>
    );
}
 
export default DatePicker;