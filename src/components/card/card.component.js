import React from 'react';
import styles from './card.module.css';

import { StatusIcon } from '../icons/icon.component';

type Props = {

}

const WorkflowCard = (props: Props) => {

  return (
    <div className={styles.workflowCard}>
      <div className={styles.statusIcon}>
        <StatusIcon />
      </div>
      <div className={styles.title}>
        Title
      </div>
      <div className={styles.description}>
        Description
      </div>
      <div className={styles.footer}>
        <div>Edit</div>
        <div>Delete</div>
      </div>
    </div>
  );
};

export default WorkflowCard;
