import React from 'react';
// styles
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.box}>
                <h3>ABOUT US</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eligendi iure reprehenderit cumque recusandae in?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, autem.</p>
            </div>
            <div className={styles.box}>
                <h3>NAVIGATION</h3>
                <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/destination">Destination</Link>
                </li>
                <li>
                    <Link to="/blog" >Blog</Link>
                </li>
                <li>
                    <Link to="/testimonial">Testimonial</Link>
                </li>
                <li>
                    <Link to="/contactus" >Contact Us</Link>
                </li>
            </ul>
            </div>
            <div className={styles.box}>
                <h3>RECENT POSTS</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, rerum.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vero?</p>
            </div>
            <div className={styles.box}>
                <h3>NEWSLETTER</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <form onSubmit={(e) => e.preventDefault()} >
                    <input type="text" placeholder="write your idea here..." />
                    <button>Subscribe</button>
                </form>
            </div>
        </footer>
    );
}
 
export default Footer;