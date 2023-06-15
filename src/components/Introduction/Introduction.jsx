import React from 'react';
import styles from './Introduction.module.css';
import myImage from '../../assets/me.jpg';
import { motion } from 'framer-motion';

const Introduction = () => {
    return (
        <div className={styles.Introduction}>
            <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                Justin Valentin
            </motion.h1>
            <div className={styles['Intro-content']}>
                <img src={myImage} alt="Justin Valentin" />
                <div className={styles['Intro-text']}>
    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
    As a Full-Stack Developer with a keen focus on JavaScript frameworks like Node.js and React, I find joy in transforming code into dynamic, efficient, and reliable web applications. The intersection of creativity and logic in coding is where my passion truly shines.
    </motion.p>
    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
    My journey in development has been defined by continual learning and personal growth. I thrive on the challenge of mastering new platforms and tools, and see every project as an opportunity to expand my skillset. Though I may not have decades of experience, I bring a combination of resilience, tenacity, and a never-ending quest for knowledge to the table. I'm committed to honing my craft, pushing my boundaries, and evolving with the ever-changing tech landscape.
    </motion.p>
</div>

            </div>
        </div>
    );
};

export default Introduction;
