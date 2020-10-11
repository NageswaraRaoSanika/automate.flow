import { addUser } from '../../data';
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

  try {
    dispatch({ type: LOGIN_REQUEST_SUCCESS, data: 'Login' });
  } catch (e) {
    dispatch({ type: LOGIN_REQUEST_FAIL, data: e });
  }
};

export const signUpUser = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  const {status, message} = addUser(payload);
  if (status === 200) {
    dispatch({ type: SIGNUP_REQUEST_SUCCESS, data: message });
  } else {
    dispatch({ type: SIGNUP_REQUEST_FAIL, data: message });
  }
};

export const logout = (token) => (dispatch) => null;

