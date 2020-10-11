import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Page from '../../components/page/page.component';
import Card from '../../components/card/card.component';
import styles from './workflow.module.css';
import { getWorkflows, updateWorkflow } from '../../store/workflows/actions';

type Props = {
  match: Object,
}

const Workflow = (props: Props) => {
  const { match : { params : { id }} } = props;
  const { workflows } = useSelector((store) => ({
    workflows: store.workflowsStore.workflows,
  }), shallowEqual);
  const dispatch = useDispatch();

  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    if (Object.values(workflows).length === 0) {
      dispatch(getWorkflows());
    }
  }, [dispatch, workflows]);
  const workflow = workflows[id] || {};
  const { name = '', nodes: currentNodes = [] } = workflow;

  useEffect(() => {
    setNodes(currentNodes)
  }, [currentNodes]);

  const addNode = () => {
    const increment = nodes.length + 1;
    const id = `Node ${increment}`;
    const status = 'Pending';
    const node = {id, status};
    setNodes([...nodes, node]);
  };

  const deleteNode = () => {
    const newNodes = [...nodes];
    newNodes.pop();
    setNodes(newNodes);
  };

  const shuffleNodes = () => {
    // Fisher–Yates_shuffle algorithm
    const newNodes = [...nodes];
    let index = newNodes.length;
    let tempValue = null;
    let randomIndex = 0;
    while (0 !== index) {
        randomIndex = Math.floor(Math.random() * index);
        index -= 1;
        tempValue = newNodes[index];
        newNodes[index] = newNodes[randomIndex];
        newNodes[randomIndex] = tempValue;
    }
    setNodes(newNodes);
  };

  const saveWorkflow = () => {
    const newWorkflows = { ...workflows };
    newWorkflows[id].nodes = nodes;
    dispatch(updateWorkflow(newWorkflows));
  }

  return (
    <Page>
      <a href="/"> &#10094; Back to Workflows</a>
      <h2>{name}</h2>
      <div className={styles.workflowContainer}>
        <div>
          <button onClick={() => saveWorkflow()} type="button" className={styles.add}>
            &#10003; 
            Save
          </button>
          <button type="button" onClick={() => shuffleNodes()} className={styles.shuffle}>
            &#8617; 
            Shuffle
          </button>
          <button onClick={() => addNode()} type="button" className={styles.add}>
            &#9783; 
            Add Node
          </button>
          <button onClick={() => deleteNode()} type="button" className={styles.delete}>
            &#10005; 
            Delete
          </button>
        </div>
        <div className={styles.nodes}>
          {
            nodes.length > 0 ? nodes.map((d) => (
              <Card
                title={d.id}
                status={d.status}
              />
            )) : 'No nodes found'
          }
        </div>
      </div>
    </Page>
  );
};

export default Workflow;
