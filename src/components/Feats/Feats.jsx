import React from 'react';
import styles from './Feats.module.css';
import InteractiveButton from './InteractiveButton/InteractiveButton';
import LiveSearch from './Livesearch/LiveSearch';
import Form from './Form/Form';

const Feats = () => {
    return (
        <div className={styles.Feats}>
            <h1>Example Showcase</h1>
            <h3>Button</h3>
            <InteractiveButton />
            <h3>Live search</h3>
            <LiveSearch />
            <h3>Form</h3>
            <Form />
        </div>
    );
};

export default Feats;
