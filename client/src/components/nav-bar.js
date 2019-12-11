import React from "react";
import "../style/nav-bar.css";
// import NavBarSearchBox from "./nav-bar-search-box";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
/**
 * @author Osvaldo Carrillo
 * Date: 11/25/2019
 * This class is responsible of displaying the navigation
 * bar.
 */

export default class NavigationBar extends React.Component {
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
        <Link to="/postJob">
          <button className="button-main-page">Post Job</button>
        </Link>
      </div>
    );
  }
}
