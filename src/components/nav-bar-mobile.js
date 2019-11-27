import React from "react";
import "../style/nav-bar-mobile.css";
import logo from "../images/logo.svg";
import hamLogo from "../images/hamburguer-white-icon.svg";
import NavBarSearchBox from "./nav-bar-search-box";

/**
 * @author Osvaldo Carrillo
 * Date: 11/26/2019
 * This class is responsible of displaying the
 * navigation bar for mobile and tablet
 */
export default class NavBarMobile extends React.Component {
  render() {
    return (
      <div className="navbar-mobile-container">
        <div className="navbar-mobile-logoSection">
          <div>
            <img className="navbar-logo-mobile" src={logo}></img>
          </div>
          <div>
            <button className="navbar-mobile-button"></button>
          </div>
        </div>
        <div className="navbar-mobile-searchContainer">
          <div>
            <NavBarSearchBox />
          </div>
        </div>
        <div className="navbar-mobile-postJob">
          <a
            href="/postJob"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Post Job
          </a>
        </div>
        <div>HOME</div>
      </div>
    );
  }
}
