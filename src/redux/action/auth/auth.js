import * as actionLabels from "../../type";

export const loginStart = () => ({
  type: actionLabels.LOGIN_START,
});

export const login = (payload) => ({
  type: actionLabels.LOGIN_SAGA,
  payload,
});

export const loginSuccess = (payload) => ({
  type: actionLabels.LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: actionLabels.LOGIN_FAIL,
  payload,
});
