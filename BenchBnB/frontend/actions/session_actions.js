import * as SessionUtils from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = (user) => dispatch => SessionUtils.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)));
  
export const login = (user) => dispatch => SessionUtils.login(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => SessionUtils.logout()
  .then(() => dispatch(logoutCurrentUser()));
