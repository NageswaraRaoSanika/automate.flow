import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
} from './types';

const initialStore = {
  error: null,
  loading: false,
  loginMessage: '',
  signUpMessage: '',
};

const authStore = (state = initialStore, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loginMessageata: '',
        signUpMessage: '',
        error: null,
      };

    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        loginMessage: action.data,
      };

    case LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loginMessage: '',
        error: action.data,
        loading: false,
      };
  
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        signUpMessage: '',
        loginMessage: '',
        error: null,
      };

    case SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        signUpMessage: action.data,
      };

    case SIGNUP_REQUEST_FAIL:
      return {
        ...state,
        signUpMessage: '',
        error: action.data,
        loading: false,
      };

    default: return state;
  }
};

export default authStore;