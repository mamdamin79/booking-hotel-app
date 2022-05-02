import React from 'react';
// styles
import styles from './ContactForm.module.css'
// icons
import { BsFacebook, BsInstagram, BsLinkedin, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
const ContactForm = () => {
    return (
        <div className={styles.container}>
            <main>
                <h3>Contact Form</h3>
                <p>Fill out the form below.we will get back you soon.</p>
                <form>
                    <div className={styles.row}>
                        <div className={styles.controler}>
                            <label htmlFor="">first name</label>
                            <input type="text" placeholder="your name"/>
                        </div>
                        <div className={styles.controler}>
                            <label htmlFor="">last name</label>
                            <input type="text" placeholder="your last name"/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.controler}>
                            <label htmlFor="">Phone Number</label>
                            <input type="tel" placeholder="your number"/>
                        </div>
                        <div className={styles.controler}>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="your email"/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.controler}>
                            <label htmlFor="">Subject</label>
                            <input type="text" placeholder="enter subject"/>
                        </div>
                        <div className={styles.controler}>
                            <label htmlFor="">Company</label>
                            <input type="text" placeholder="your company"/>
                        </div>
                    </div>
                    <div className={styles.textareaContainer}>
                        <label htmlFor="">write your message</label>
                        <textarea className={styles.textarea}></textarea>
                    </div>
                    <button className={styles.submit}>Submit now</button>
                </form>
            </main>
            <aside>
                <div>
                    <h3>Visit our location</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, vitae!</p>
                </div>
                <div>
                    <h3>Message Us</h3>
                    <p>info@example.com</p>
                    <br />
                    <p>021 4444444</p>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <div className={styles.iconContainer}>
                        <BsInstagram/>
                        <BsTelegram/>
                        <BsFacebook/>
                        <BsTwitter/>
                        <BsLinkedin/>
                        <BsYoutube/>
                    </div>
                </div>
            </aside>
        </div>
    );
}
 
export default ContactForm;