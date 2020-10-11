import {
  addWorkflow as addWorkflowToStorage,
  getWorkflows as listFlows,
  updateWorkflows as updateWorkflowstoStorage
} from '../../api';

import {
  ADD_WORKFLOW, LIST_WORKFLOWS, SET_CURRENT_WORKFLOW,
} from './types';

export const getWorkflows = () => (dispatch) => {
  const data = listFlows();
  dispatch({ type: LIST_WORKFLOWS, data });
};

export const addWorkflow = (name) => (dispatch) => {
  dispatch({ type: ADD_WORKFLOW });
  const data = addWorkflowToStorage(name);
  dispatch({ type: LIST_WORKFLOWS, data });
};

export const setCurrentWorkflow = (payload) => (dispatch) => {
  dispatch({ type: SET_CURRENT_WORKFLOW, data: payload });
};

export const updateWorkflow = (workflows) => (dispatch) => {
  const data = updateWorkflowstoStorage(workflows);
  dispatch({ type: LIST_WORKFLOWS, data });
}