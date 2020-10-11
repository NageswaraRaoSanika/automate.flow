import React from 'react';
import styles from './card.module.css';

import { StatusIcon } from '../icons/icon.component';

type Props = {
  name: String, 
  description: String,
  status: String,
}

const WorkflowCard = (props: Props) => {

  return (
    <div className={styles.workflowCard}>
      <div
        className={styles.statusIcon}
        onClick={(e) => {
          e.preventDefault();
          alert(props.status);
        }}
        style={{background: props.status === 'Pending' ? '#f2f2f2' : 'green'}}
      >
        <StatusIcon color={props.status === 'Pending' ? 'black' : 'white'} />
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

export default WorkflowCard;
