import React from "react";
import "../style/main-container.css";
import SearchBoxContainer from "./search-box-MainPage";
import JobsContaier from "./job-container";

/**
 * @author Osvaldo Carrillo.
 * Date: 11/21/2019.
 * This class is responsible of displaying all the elements
 * for the main page of the site.
 */
export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    //this.osvaldoEle = React.createRef();
    this.state = {
      bgColor: "",
      display: ""
    };
    this.myRef = React.createRef();
  }

  displayDOM = () => {
    // const node = this.osvaldoEle.current;
    // console.log(node);
    // node.style.color = "blue";
    // node.style.backgroundColor = "red";
    this.setState({ bgColor: "red" });
    this.setState({ display: "inline" });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleMyFunction);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleMyFunction);
  }

  handleMyFunction = () => {
    var y = window.scrollY;
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    var backImage = Math.round(document.documentElement.clientHeight * 0.55);

    // console.log("This is the srolling in Pixels: ", h);
    console.log("This is my image value ", backImage);
    console.log("My scroll Y ", y);
    //console.log(node);

    if (y >= backImage - 40) {
      this.setState({ display: "inline" });
      //alert();
    }

    if (y <= backImage - 40) {
      this.setState({ display: "none" });
    }
  };

  render() {
    return (
      <div className="container-mainPage">
        <div className="top-mainPage">
          <button className="button-main-page">Post Job</button>
          <SearchBoxContainer />
        </div>
        <div
          className="container-example"
          style={{ display: this.state.display }}
        ></div>
        <button
          className="button-example-2"
          style={{ backgroundColor: this.state.bgColor }}
          onClick={this.displayDOM}
          id="erase-me"
        >
          Erase Me
        </button>
        <div>
          <JobsContaier />
        </div>
      </div>
    );
  }
}
