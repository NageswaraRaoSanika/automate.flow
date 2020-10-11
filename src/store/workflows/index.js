import {
  LIST_WORKFLOWS,
  SET_CURRENT_WORKFLOW
} from './types';

const initialStore = {
  workflows: {},
  workflow: {}
};

const workflowsStore = (state = initialStore, action) => {
  switch (action.type) {
    case LIST_WORKFLOWS:
      return {
        ...state,
        workflows: action.data,
      };

    case SET_CURRENT_WORKFLOW:
      return {
        ...state,
        workflow: action.data,
      };
  
    default: return state;
  }
};

export default workflowsStore;
