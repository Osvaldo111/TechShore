import React from "react";
import "../style/nav-bar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
/**
 * @author Osvaldo Carrillo
 * Date: 12/19/2019
 * This class is responsible of displaying the navigation
 * bar for the Adminstrador.
 */

export default class NavigationBarAdministrador extends React.Component {
  render() {
    return (
      <div
        className="navigation-bar"
        style={{ display: this.props.hideNavBar }}
      >
        <Link to="/">
          <img className="navbar-logo" src={logo} alt="navbar-logo"></img>
        </Link>
        <div className="navbar-search-box">{/* <NavBarSearchBox /> */}</div>
        <button className="button-main-page">Logout</button>
      </div>
    );
  }
}
