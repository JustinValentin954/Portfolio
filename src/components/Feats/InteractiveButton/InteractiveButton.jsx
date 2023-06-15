// InteractiveButton.jsx
import React from 'react';
import styles from './InteractiveButton.module.css';
import { motion } from 'framer-motion';

const InteractiveButton = () => {
    return (
        <motion.button
            className={styles.button}
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px 2px rgba(255, 255, 255, 1)" }}
            whileTap={{ scale: .95, boxShadow: "0 0 8px 2px rgba(255, 255, 255, 1)" }}
            transition={{ duration: 0.05 }}
        >
            Click me
        </motion.button>
    );
};

export default InteractiveButton;
