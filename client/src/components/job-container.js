import React from "react";
import JobCard from "./job-card";
import "../style/card-container.css";
import { Link } from "react-router-dom";

/**
 * @author Osvaldo Carrillo
 * Date: 22/11/2019
 * This class is a component which is responsible of containing all
 * the job cards and display them in the main page.
 */
export default class JobsContaier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.getJobDescription("");
    console.log("JUST ONE TIME");
  }

  componentDidUpdate(previousProps, previouState) {
    if (previousProps.searchBoxData !== this.props.searchBoxData) {
      console.log("Previous Data: ", previousProps.searchBoxData);
      console.log(this.props.searchBoxData);
      this.getJobDescription(this.props.searchBoxData);
      console.log("Change update");
    }
  }

  getJobDescription = param => {
    fetch("/api/getJobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ keyword: param })
    })
      .then(result => result.json())
      .then(listDescription => {
        var jobDescription = [];
        for (let index = 0; index < listDescription.length; index++) {
          jobDescription.push(listDescription[index]);
        }
        this.setState({ list: jobDescription });
      });
  };
  // getJobDescription = param => {
  //   fetch("/api/getJobs")
  //     .then(res => res.json())
  //     .then(listDescription => {
  //       var jobDescription = [];
  //       for (let index = 0; index < listDescription.length; index++) {
  //         jobDescription.push(listDescription[index]);
  //       }
  //       this.setState({ list: jobDescription });
  //     });
  // };
  render() {
    const list = this.state.list;

    return (
      <div className="card-space">
        {list.map(item => {
          return (
            <Link
              to={{
                pathname: "/description/" + item.id,
                search: "?job_search=" + item.id,
                state: { list: list[item.id - 1] }
              }}
              className="card-remove-decoration"
              key={item.id}
            >
              <JobCard
                job_position={item.job_position}
                date_posted={item.date_posted}
                company_name={item.company_name}
                job_hours={item.job_hours ? item.job_hours : "Full-Time"}
              />
            </Link>
          );
        })}
      </div>
    );
  }
}
