import React from 'react';
import FilterWorkflows from '../../components/filter-workflows/filter.component';
import Page from '../../components/page/page.component';
import Card from '../../components/card/card.component';

import styles from './workflows.module.css';

const Workflows = (props: Props) => {
  return (
    <Page>
      <h2>Workflows</h2>
      <div className={styles.workflowsContainer}>
        <div>
          <button className={styles.createWorkflow}>
            + Create New Workflow
          </button>
          <FilterWorkflows />
        </div>
        <div className={styles.workflows}>
          <Card />
        </div>
      </div>
    </Page>
  );
};

export default Workflows;
