import React from "react";
import ReactDOM from "react-dom";
import * as SessionUtils from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.login = SessionUtils.login;
  window.signup = SessionUtils.signup;
  window.logout = SessionUtils.logout;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});