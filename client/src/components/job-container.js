import React from "react";
import JobCard from "./job-card";
import "../style/card-container.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchBoxData } from "../actions";

/**
 * @author Osvaldo Carrillo
 * Date: 22/11/2019
 * This class is a component which is responsible of containing all
 * the job cards and display them in the main page.
 */
const DISPLAY_NUM_JOBS = 5;
class JobsContaier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      offsetIndex: 0,
      disabledLoadBtn: false
    };
  }

  componentDidMount() {
    alert("Did Mount");
    // Get the inital jobs by providing
    // and empty string
    this.getJobDescription("");
  }

  /**
   * This function c
   * @param {Object} previousProps
   * @param {Object} previouState
   */
  componentDidUpdate(previousProps, previouState) {
    if (previousProps.searchBoxData !== this.props.searchBoxData) {
      alert(this.props.searchBoxData);

      this.setState({ list: [], offsetIndex: 0 }, () => {
        this.getJobDescription(this.props.searchBoxData);
      });
    }
  }

  getJobDescription = param => {
    fetch("/api/getJobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        keyword: param,
        offsetIndex: this.state.offsetIndex,
        numJobs: DISPLAY_NUM_JOBS
      })
    })
      .then(result => result.json())
      .then(listDescription => {
        console.log("THE KEYWORD: ", this.props.searchBoxData);
        var jobDescription = [];
        // Reset the button
        this.setState({ disabledLoadBtn: false });
        if (listDescription.length !== 0) {
          for (let index = 0; index < listDescription.length; index++) {
            jobDescription.push(listDescription[index]);
          }
          console.log("Old index offset: ", this.state.offsetIndex);
          // Update the Offsetindex for the DB
          var newOffsetindex = this.state.offsetIndex + 5;
          // this.setState({ list: jobDescription, offsetIndex: newOffsetindex });

          // Set the new state
          this.setState(prevState => ({
            list: [...prevState.list, ...jobDescription],
            offsetIndex: newOffsetindex
          }));

          console.log("New Offset Index: ", newOffsetindex);
          console.log("New list: ", this.state.list);
        } else {
          // Reset the keyword.
          // this.props.getSearchBoxData("");
          // Disabled button, change message and
          // color of the button.
          this.setState({ disabledLoadBtn: true });
        }
      });
  };

  render() {
    const { list } = this.state;
    console.log("RENDER************");
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
        <div className="JobContainer-loadButon-container">
          <button
            className="JobContainer-loadButton"
            onClick={() => this.getJobDescription(this.props.searchBoxData)}
            disabled={this.state.disabledLoadBtn}
            style={{
              backgroundColor: !this.state.disabledLoadBtn ? "" : "red"
            }}
          >
            {!this.state.disabledLoadBtn
              ? "Load More Jobs"
              : "Sorry, there are no more.."}
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.searchBox.searchBoxData);
  return { searchBoxData: state.searchBox.searchBoxData };
}
const mapDispatchToProps = {
  getSearchBoxData
};
export default connect(mapStateToProps, mapDispatchToProps)(JobsContaier);
