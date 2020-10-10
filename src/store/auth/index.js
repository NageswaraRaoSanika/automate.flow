import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
} from './types';

const initialStore = {
  error: null,
  loading: false,
  data: null,
};

const authStore = (state = initialStore, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };

    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: action.data,
      };

    case LOGIN_REQUEST_FAIL:
      return {
        ...state,
        data: null,
        error: action.data,
        loading: false,
      };

    default: return state;
  }
};

export default authStore;