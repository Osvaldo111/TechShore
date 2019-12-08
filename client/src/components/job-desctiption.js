import React from "react";
import NavigationBar from "./nav-bar";
import "../style/job-description.css";
import JobDescExtraInfo from "./job-desc-extraInfo";
import NavBarMobile from "./nav-bar-mobile";
/**
 * @author Osvaldo Carrillo
 * Date: 11/27/2019
 * This class is responsible for displaying the
 * job description.
 */
const seed =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan diam non tincidunt egestas. Nam ipsum massa, hendrerit in sollicitudin a, sagittis sit amet ante. Fusce in consectetur odio. Aenean non lobortis justo, ut iaculis nulla. Proin dignissim neque in porttitor congue. Maecenas ut ligula ultrices massa facilisis sagittis quis sit amet arcu. In at iaculis nulla. Morbi vitae velit tincidunt, vulputate dolor eu, cursus elit. Phasellus eget nisl leo. Nunc in ullamcorper lectus. Duis vel dignissim nibh. Nulla facilisi. Vestibulum dolor ante, tristique quis velit id, malesuada eleifend eros. Quisque dignissim sollicitudin dictum. Integer interdum erat eget elit pellentesque scelerisque. Morbi nec orci tortor.";
export default class JobDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("Prop location", this.props.location.search);
    const job_id = this.props.match.params.id;
    console.log("Prop match", job_id);

    this.sendDatetoAPI(job_id);
  }

  sendDatetoAPI(job_id) {
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ example: job_id })
    })
      .then(result => result.json())
      .then(info => {
        console.log(info);
      });
  }
  render() {
    return (
      <div>
        <div>
          <NavigationBar />
          <NavBarMobile />
        </div>
        <div className="job-desc-container">
          <div className="job-desc-generals">
            <div className="job-desc-gral-first">
              <h1>Software Enginnering</h1>
              <h2>Clement LLC</h2>
              <h3>14 November 2019</h3>
              <h3>Part-Time</h3>
            </div>
            <div className="job-desc-gral-apply">
              <div className="job-desc-centerWrapper">
                <h2>Apply Here</h2>
              </div>
              <div className="job-desc-centerWrapper">
                <button className="button-desc-page">Apply</button>
              </div>
            </div>
          </div>
          <div className="job-desc-content">
            <JobDescExtraInfo title="Location" content={seed} />
            <JobDescExtraInfo title="Job Description" content={seed} />
          </div>
        </div>
      </div>
    );
  }
}
