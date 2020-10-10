import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
} from './types';

export const authenticate = (payload) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    dispatch({ type: LOGIN_REQUEST_SUCCESS, data: payload });
  } catch (e) {
    dispatch({ type: LOGIN_REQUEST_FAIL, data: e });
  }
};

export const logout = (token) => (dispatch) => null;

