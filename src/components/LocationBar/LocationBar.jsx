import React from 'react';
import { Link, useLocation } from "react-router-dom"
import styles from "./LocationBar.module.css"
const LocationBar = () => {
    const location =useLocation().pathname.substring(1).toUpperCase()
    return (
        <div className={styles.container}>
            <h1>{location}</h1>
            <div>
                <Link to="/">Home /</Link>
                <span>{location}</span>
            </div>
        </div>
    );
}
 
export default LocationBar;