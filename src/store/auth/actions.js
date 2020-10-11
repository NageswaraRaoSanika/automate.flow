import {
  addUser,
  getUserByEmailAndPassword,
  createUserSession,
  getAuthUser,
  destroyUserSession,
} from '../../api';

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_FAIL,
  SIGNUP_REQUEST_SUCCESS,
} from './types';

export const authenticate = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  const user = getUserByEmailAndPassword(payload);
  if (user.length > 0) {
    createUserSession(user[0]);
    dispatch({ type: LOGIN_REQUEST_SUCCESS, data: 'success' });
    window.location.reload(false);
  } else {
    dispatch({ type: LOGIN_REQUEST_FAIL, data: 'Please enter correct email & password' });
  }
};

export const signUpUser = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  const { status, message } = addUser(payload);
  if (status === 200) {
    dispatch({ type: SIGNUP_REQUEST_SUCCESS, data: message });
  } else {
    dispatch({ type: SIGNUP_REQUEST_FAIL, data: message });
  }
};

export const checkAuth = () => getAuthUser();

export const logout = () => destroyUserSession();

