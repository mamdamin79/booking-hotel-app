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
                    <Link to="/" onClick={()=> setShowMobileMenu(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={()=> setShowMobileMenu(false)}>About Us</Link>
                </li>
                <li>
                    <Link to="/destination" onClick={()=> setShowMobileMenu(false)}>Destination</Link>
                </li>
                <li>
                    <Link to="/blog" onClick={()=> setShowMobileMenu(false)}>Blog</Link>
                </li>
                <li>
                    <Link to="/testimonial" onClick={()=> setShowMobileMenu(false)}>Testimonial</Link>
                </li>
                <li>
                    <Link to="/contactus" onClick={()=> setShowMobileMenu(false)}>Contact Us</Link>
                </li>
            </ul>
            
            <div className={styles.loginContainer}>
                <Link to="/signin">
                    <BiChevronRight/>Sign-in
                </Link>
                <Link to="/register">
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