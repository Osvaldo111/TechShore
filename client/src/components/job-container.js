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
        // console.log("THE DESCRIPTION OBJECT: ", listDescription);
        var job_id = [];
        var job_position = [];
        var company_name = [];
        var date_posted = [];
        var job_hours = [];
        var jobDescription = [];
        for (let index = 0; index < listDescription.length; index++) {
          job_id.push(listDescription[index].job_id);
          job_position.push(listDescription[index].job_position);
          company_name.push(listDescription[index].company_name);
          date_posted.push(listDescription[index].date_posted);
          job_hours.push(listDescription[index].job_hours);
          jobDescription.push(listDescription[index] /*.job_description*/);
        }
        this.setState({ list: jobDescription });
        console.log("The description with all elements", jobDescription);
      });
  };
  render() {
    const { list } = this.state;
    return (
      <div className="card-space">
        <div>
          {list.map(item => {
            return <h1>{item.id}</h1>;
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
