import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FilterWorkflows from '../../components/filter-workflows/filter.component';
import Page from '../../components/page/page.component';
import Card from '../../components/card/card.component';
import useModal from '../../components/modal/modal.component';

import styles from './workflows.module.css';
import { addWorkflow, getWorkflows } from '../../store/workflows/actions';

const Workflows = (props: Props) => {
  const { workflows } = useSelector((store) => ({
    workflows: store.workflowsStore.workflows,
  }), shallowEqual);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [Modal, open, close] = useModal('addWorkflow');

  useEffect(() => {
    dispatch(getWorkflows());
  }, [dispatch]);

  useEffect(() => {
    setData(Object.values(workflows))
  }, [workflows]);

  const handleWorkflowSubmit = (e) => {
    e.preventDefault();
    dispatch(addWorkflow(name));
    close();
  }

  const renderDescription = (workflow) => {
    const { nodes = [] } = workflow;
    const totalNodes = nodes.length;
    const pending = nodes.filter(n => n.status === 'Pending').length;
    const inProgress = nodes.filter(n => n.status === 'InProgress').length;
    const completed = nodes.filter(n => n.status === 'Completed').length;

    return (
      <>
        <div>Total Nodes: {totalNodes}</div>
        <small>Pending: {pending}</small><br />
        <small>InProgress: {inProgress}</small><br />
        <small>Completed: {completed}</small>
      </>
    )
  };

  const getStatus = (workflow) => {
    const { nodes = [] } = workflow;
    const totalNodes = nodes.length;
    const completed = nodes.filter(n => n.status === 'Completed').length;

    if (totalNodes > 0 && completed === totalNodes) {
      return 'Completed';
    } else {
      return 'Pending';
    }
  }
  const history = useHistory();
  return (
    <Page>
      <Modal>
        <form onSubmit={(e) => handleWorkflowSubmit(e)}>
          <h2>Add Workflow</h2>
          <div>
            <div className={styles.label}>Workflow Name</div>
            <input required onChange={(e) => setName(e.target.value)} value={name} type="text" />
          </div>
          <button type="submit" className={styles.createWorkflow}>
            Submit
          </button>
        </form>
      </Modal>
      <div id="addWorkflow" />
      <h2>Workflows</h2>
      <div className={styles.workflowsContainer}>
        <div>
          <button type="button" onClick={open} className={styles.createWorkflow}>
            + Create New Workflow
          </button>
          <FilterWorkflows
            filterByName={
              (name) => name === ''
                ? setData(Object.values(workflows))
                : setData(Object.values(workflows).filter(d => d.name.indexOf(name) > -1))
            }
            filterByState={
              (state) => state === ''
                ? setData(Object.values(workflows))
                : setData(Object.values(workflows).filter(d => getStatus(d) === state))
            }
          />
        </div>
        <div className={styles.workflows}>
          {
            data.length > 0 ? data.map((d) => (
              <div className={styles.workflowClickWrapper} onClick={() =>history.push(`/automate.flow/workflow/${d.id}`)} key={d.id}>
                <Card
                  title={d.name}
                  status={getStatus(d)}
                  description={renderDescription(d)}
                  updateStaus={() => null}
                />
              </div>
            )) : 'No Workflows found'
          }
        </div>
      </div>
    </Page>
  );
};

export default Workflows;
