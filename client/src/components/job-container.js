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
    this.getJobDescription();
  }

  getJobDescription = () => {
    fetch("/api/getJobDescription")
      .then(res => res.json())
      .then(listDescription => {
        var jobDescription = [];
        for (let index = 0; index < listDescription.length; index++) {
          jobDescription.push(listDescription[index].job_description);
        }
        this.setState({ list: jobDescription });
      });
  };
  render() {
    const { list } = this.state;
    return (
      <div className="card-space">
        <div>
          {list.map(item => {
            return <h1>{item}</h1>;
          })}
        </div>
        <Link to="/description" className="card-remove-decoration">
          <JobCard />
        </Link>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    );
  }
}
