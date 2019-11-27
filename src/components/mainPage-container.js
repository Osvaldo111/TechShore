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
 * for the main page of the site.
 */
export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.displayNavBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.displayNavBar);
  }

  displayNavBar = () => {
    var yAxisWindow = window.scrollY;
    var topMainImage = Math.round(document.documentElement.clientHeight * 0.55);

    if (yAxisWindow >= topMainImage) {
      this.setState({ display: "flex" });
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
          <SearchBoxContainer />
        </div>
        <div className="display-nav" style={{ display: this.state.display }}>
          <NavigationBar />
          <NavBarMobile />
        </div>
        <div>
          <JobsContaier />
        </div>
      </div>
    );
  }
}
