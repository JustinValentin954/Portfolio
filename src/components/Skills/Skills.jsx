import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ["React.js", "JavaScript", "Full-Stack Development", "Node.js", "MongoDB", 'Tailwind'];

  return (
    <div className={styles.Skills}>
      <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        Skills
      </motion.h1>
      <div className={styles.SkillCards}>
        {skills.map((skill, i) => (
          <motion.div 
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
