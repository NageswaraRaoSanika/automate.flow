import React from 'react';
import styles from './icon.module.css';

export const FlowIcon = () => <span className={styles.largeIcon}>&#9753;</span>;

export const UserIcon = () => <span className={styles.icon}>&#9786;</span>;

export const StatusIcon = ({color}) => <span className={styles.icon} style={{color}}>&#10004;</span>;