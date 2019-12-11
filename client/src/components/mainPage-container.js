import React from "react";
import "../style/main-container.css";
import SearchBoxContainer from "./search-box-MainPage";
import JobsContaier from "./job-container";
import NavigationBar from "./nav-bar";
import { Link } from "react-router-dom";
import NavBarMobile from "./nav-bar-mobile";

/**
 * @author Osvaldo Carrillo.
 * Date: 11/21/2019.
 * This class is responsible of displaying all the elements
 * for the main page of the site. This class handles the funcionality
 * to hide the navigation bars both in desktop and mobile.
 */
export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "inline",
      hideBarInTopPage: "none"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.displayNavBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.displayNavBar);
  }

  someFunctionData = param => {
    console.log("Some data", param);
  };

  displayNavBar = () => {
    var yAxisWindow = window.scrollY;
    var topMainImage = Math.round(document.documentElement.clientHeight * 0.55);

    if (yAxisWindow >= topMainImage) {
      this.setState({
        display: "flex",
        hideBarInTopPage: "flex"
      });
    }

    if (yAxisWindow <= topMainImage) {
      this.setState({ display: "none" });
    }
  };
  render() {
    return (
      <div className="container-mainPage">
        <div className="top-mainPage">
          <Link to="/postJob">
            <button className="button-main-page">Post Job</button>
          </Link>
          <SearchBoxContainer someFunctionData={this.someFunctionData} />
        </div>
        <div className="display-nav" style={{ display: this.state.display }}>
          <NavigationBar hideNavBar={this.state.hideBarInTopPage} />
          <NavBarMobile hideBar={this.state.hideBarInTopPage} />
        </div>
        <div>
          <JobsContaier />
        </div>
      </div>
    );
  }
}
