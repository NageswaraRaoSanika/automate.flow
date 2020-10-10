
import { combineReducers } from 'redux';

import authStore from './auth';

const rootReducer = combineReducers({
  authStore,
});

export default rootReducer;
