import React, { Component } from "react";

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="section">
        <div className="container">
          <div id="login-row" className="row justify-content-center">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action="#" method="post">
                  <h3 className="text-center">Welcome to E-shop!</h3>
                  <br />
                  <label htmlFor="username">Phone Number:</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    maxLength="8"
                    required
                  />
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <a href="#" className="pull-right a_override">Forget Password?</a>
                    <br />
                  </div>
                  <button
                    className="primary-btn pull-right"
                    type="submit"
                    name="submitBtn"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
