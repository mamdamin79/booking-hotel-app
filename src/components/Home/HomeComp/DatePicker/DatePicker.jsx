import React from 'react';
import styles from './DatePicker.module.css'
// api
const DatePicker = () => {
    const submitHandler = async(e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Enjoy your Holidays</h1>
            <p className={styles.subTitle}>Search and book a hotel</p>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='search a city' />
                <div>
                    <input type="date" placeholder="check in" />
                    <input type="date" placeholder="check out" />
                </div>
                <input type="number" placeholder="rooms qnty" />
                <button className={styles.search}>Search</button>
            </form>
        </div>
    );
}
 
export default DatePicker;