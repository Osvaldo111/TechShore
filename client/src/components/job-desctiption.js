import React from "react";
import NavigationBar from "./nav-bar";
import "../style/job-description.css";
import JobDescExtraInfo from "./job-desc-extraInfo";
import NavBarMobile from "./nav-bar-mobile";
import { Link } from "react-router-dom";

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
    this.state = {
      jodDescription: "",
      loading: true
    };
  }

  componentDidMount() {
    const job_search = this.props.location.search;

    // Get the Job Id
    const job_id = job_search.replace("?job_search=", "");
    this.sendDatetoAPI(job_id);
  }

  sendDatetoAPI(job_id) {
    fetch("/api/getJobDescription", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ example: job_id })
    })
      .then(result => result.json())
      .then(info => {
        if (info.length <= 0) {
          console.log("No Exists", info, job_id);
          this.props.history.push("/NotFound");
        }

        this.setState({ loading: false, jobDescription: info });
        console.log(info);
      });
  }
  render() {
    const jobDescription = this.state.jobDescription;

    if (this.state.loading) {
      return "Loading...";
    }
    return (
      <div>
        <div>
          <NavigationBar />
          <NavBarMobile />
        </div>
        {jobDescription.map(item => {
          return (
            <div className="job-desc-container" key={item.id}>
              <div className="job-desc-generals">
                <div className="job-desc-gral-first">
                  <h1>{item.job_position}</h1>
                  <h2>{item.company_name}</h2>
                  <h3>{item.date_posted}</h3>
                  <h3>{item.job_hours}</h3>
                </div>
                <div className="job-desc-gral-apply">
                  <div className="job-desc-centerWrapper">
                    <h2>Apply Here</h2>
                  </div>
                  <div className="job-desc-centerWrapper">
                    <a className="button-desc-page" href={item.job_link}>
                      Apply
                    </a>
                  </div>
                </div>
              </div>
              <div className="job-desc-content">
                <JobDescExtraInfo
                  title="Location"
                  content={item.job_location}
                />
                <JobDescExtraInfo
                  title="Job Description"
                  content={item.job_description}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
