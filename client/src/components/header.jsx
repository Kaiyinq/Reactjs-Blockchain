import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/main.css";
import logo from "../img/logo.png";
import Home from "./home";
import Login from "./login";
import AccountBox from "./accountbox";
import MyAccount from "./myaccount";
import Logout from "./logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlus,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  state = {
    displayLogin: true
  };

  //   // got access to this.state
  //   constructor() {
  //     super();
  //     // bind showDropDown so it can have access to this.state unless use what's used below at showDropDown
  //     this.showDropDown = this.showDropDown.bind(this);
  //   }

  hideNav = () => {
    this.setState(
      this.state.displayLogin ? { displayLogin: true } : { displayLogin: false }
    );
  };

  render() {
    return (
      <Router>
        <div id="top-header">
          <div className="container">
            <div className="row justify-content-between">
              <div>
                <span>WELCOME TO ESHOP!</span>
              </div>
              <div>
                <ul className="header-top-links">
                  <li>Newsletter</li>
                  <li>FAQ</li>
                  <li>Track My Order</li>
                  <li>
                    <Link to={"/login"} className="a_override">Login</Link>
                  </li>
                  <li><a href="/login" className="a_override">Register</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="header">
          <div className="container">
            <div className="row justify-content-between">
              <div>
                <div className="header-logo">
                  <Link to={"/"} className="logo">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <Accounts />
            </div>
          </div>
        </div>
        <Nav />
        <div id="breadcrumb">
          <div className="container">
            <ul className="breadcrumb_override">
              <li>
                <Link to={"/"} className="a_override">Home</Link>
              </li>
              <li className="active">Login
              </li>
            </ul>
          </div>
        </div>
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/myaccount" component={MyAccount} />
          <Route path="/logout" component={Logout} />
        </Switch>
        <br />
        <Footer />
      </Router>
    );
  }
}

export default Header;

class Accounts extends Component {
  render() {
    return (
      <div>
        <div style={{margin: '16px', position: 'relative'}}>
          <AccountBox 
            items={[
              {id: 1, value: 'My Account', route: '/myaccount', icon: <FontAwesomeIcon icon={faUser} />  },
              {id: 2, value : 'Log Out', route: '/logout', icon: <FontAwesomeIcon icon={faSignOutAlt} />  }
            ]}
          />
        </div>
      </div>
    );
  }
}



function Nav() {
  return (
    <div id="navigation">
      <div className="container">
        <div id="responsive-nav">
          <div className="menu-nav">
            <ul className="menu-list">
              <li className="active">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="section section-grey">
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="footer-social">
              <li>
                  <i>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </i>
              </li>
              <li>
                  <i>
                    <FontAwesomeIcon icon={faTwitter} />
                  </i>
              </li>
              <li>
                  <i>
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
              </li>
              <li>
                  <i>
                    <FontAwesomeIcon icon={faGooglePlus} />
                  </i>
              </li>
              <li>
                  <i>
                    <FontAwesomeIcon icon={faPinterest} />
                  </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
