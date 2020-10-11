
import { combineReducers } from 'redux';

import authStore from './auth';
import workflowsStore from './workflows';

const rootReducer = combineReducers({
  authStore,
  workflowsStore,
});

export default rootReducer;
