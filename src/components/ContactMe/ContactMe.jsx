import React from 'react';
import styles from './ContactMe.module.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div className={styles.ContactMe}>
            <h2>Contact Me</h2>
                <div className={styles.IconContainer}>
                    <a href="mailto:JustinValentin954@gmail.com">
                        <FaEnvelope className={styles.Icon}/>
                    </a>
                    <a href="https://github.com/JustinValentin954" target="_blank" rel="noreferrer">
                        <FaGithub className={styles.Icon}/>
                    </a>
                    <a href="https://www.linkedin.com/in/justin-valentin-2a2940279/" target="_blank" rel="noreferrer">
                        <FaLinkedin className={styles.Icon}/>
                    </a>
                    <a href="https://twitter.com/JustinV29081" target="_blank" rel="noreferrer">
                        <FaTwitter className={styles.Icon}/>
                    </a>
        </div>
        </div>
    );
};

export default ContactMe;
