import React from "react";
import "../style/job-card.css";

/**
 * @author Osvaldo Carrillo
 * Date: 11/22/2019
 * This class contains the component "job card" which is responsible
 * of displaying the card with a brief description.
 */
export default class JobCard extends React.Component {
  render() {
    return (
      <div>
        <div className="job-card">
          <div className="job-card-information">
            <div className="job-card-sameLineInfo">
              <h2>Software Engineering</h2>
              <p style={{ margin: "auto 0" }}>2 Days ago</p>
            </div>
            <h3>Company Name</h3>
            <p>Part Time</p>
          </div>
        </div>
      </div>
    );
  }
}
