import React from "react";
import "../style/nav-bar-mobile.css";
import logo from "../images/logo.svg";
import NavBarSearchBox from "./nav-bar-search-box";
import { Link } from "react-router-dom";

/**
 * @author Osvaldo Carrillo
 * Date: 11/26/2019
 * This class is responsible of displaying the
 * navigation bar for mobile and tablet
 */
export default class NavBarMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none"
    };
  }

  displayMobileNavBar = () => {
    if (this.state.display == "none") {
      this.setState({ display: "inline" });
    } else {
      this.setState({ display: "none" });
    }
  };
  render() {
    return (
      <div className="navbar-mobile-container">
        <div
          className="navbar-mobile-logoSection"
          style={{ display: this.props.hideBar }}
        >
          <div>
            <Link to="/">
              <img className="navbar-logo-mobile" src={logo}></img>
            </Link>
          </div>
          <div>
            <button
              className="navbar-mobile-button"
              onClick={this.displayMobileNavBar}
            ></button>
          </div>
        </div>
        <div style={{ display: this.state.display }}>
          <div className="navbar-mobile-searchContainer">
            <div>
              <NavBarSearchBox />
            </div>
          </div>
          <div className="navbar-mobile-btn-wrapper">
            <Link to="postJob">
              <p>Post Job</p>
            </Link>
          </div>
          <div className="navbar-mobile-btn-wrapper">
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
