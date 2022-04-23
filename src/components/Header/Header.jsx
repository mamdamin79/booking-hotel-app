import React from 'react';
import { Link } from 'react-router-dom'
// styles
import styles from "./Header.module.css";
const Headere = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/destination">Destination</Link>
                </li>
                <li>
                    <Link to="blog">Blog</Link>
                </li>
                <li>
                    <Link to="testimonial">Testimonial</Link>
                </li>
                <li>
                    <Link to="contactus">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Headere;