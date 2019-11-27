import React from "react";
import "../style/job-description.css";

export default class JobDescExtraInfo extends React.Component {
  render() {
    return (
      <div className="jobDesc-extraInfo">
        <div>
          <h2> {this.props.title}</h2>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}
