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
  render() {
    return (
      <div className="card-space">
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
