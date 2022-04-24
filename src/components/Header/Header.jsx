import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// styles
import styles from "./Header.module.css";
// icons
import { BiChevronRight,BiMenu,BiChevronLeftSquare } from "react-icons/bi";
const Headere = () => {
    const [showMobileMenu,setShowMobileMenu] = useState(false)
    return (
        <nav className={styles.nav}>
            <BiMenu onClick={()=> setShowMobileMenu(!showMobileMenu)} className={styles.bar}/>
            <ul className={showMobileMenu ? styles.open : ""}>
                {showMobileMenu && <BiChevronLeftSquare className={showMobileMenu ? `${styles.closeButton} ${styles.block}`: styles.closeButton} onClick={()=> setShowMobileMenu(false)}/>}
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
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/testimonial">Testimonial</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact Us</Link>
                </li>
            </ul>
            
            <div className={styles.loginContainer}>
                <Link to="/signin">
                    <BiChevronRight/>Sign-in
                </Link>
                <Link to="register">
                    <BiChevronRight/>
                    Register
                </Link>
                <button>
                    Request a Qoute
                </button>
            </div>
        </nav>
    );
}
 
export default Headere;