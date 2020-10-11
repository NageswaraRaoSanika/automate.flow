import React from 'react';
import styles from './card.module.css';

import { StatusIcon } from '../icons/icon.component';

type Props = {
  name: String, 
  description: String,
  status: String,
  updateStaus: void => null,
}

const CARD_STATUS_COLORS = {
  Pending: {
    background: '#f2f2f2',
    color: '#000'
  },
  InProgress: {
    background: 'rgb(26, 115, 232)',
    color: '#fff',
  },
  Completed: {
    background: 'green',
    color: '#fff',
  }
}
const Card = (props: Props) => {
  return (
    <div className={styles.workflowCard}>
      <div
        className={styles.statusIcon}
        onClick={(e) => {
          e.preventDefault();
          props.updateStaus(props.status);
        }}
        style={{...CARD_STATUS_COLORS[props.status]}}
      >
        <StatusIcon />
      </div>
      <div className={styles.title}>
        {props.title}
      </div>
      {props.description && (<div className={styles.description}>
        {props.description}
      </div>)}
      <div className={styles.footer}>
        <div>{props.status}</div>
      </div>
    </div>
  );
};

export default Card;
