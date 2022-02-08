import React from 'react';
import styles from './Error404.module.css';

export const Error404 = () => {
    return (
        <div className={styles.error}>
            <span>404</span>
            <span>page</span>
            <span>not</span>
            <span>found!!!</span>
        </div>
    );
};

