import React from "react";
import "../style/form-post-job.css";
import NavigationBar from "./nav-bar";
import NavBarMobile from "./nav-bar-mobile";

export default class PostJobForm extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <NavBarMobile />
        <div className="post-job-form-container">
          <form action="/action_page.php" className="post-job-form">
            <h1 style={{ textAlign: "center" }}>Post a Job</h1>
            <label for="fname">Company Name (Required)</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Company.."
            />

            <label for="fname">Job Position (Required)</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Postion"
            />

            <label for="fname">Schedule (Required)</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Part-time, full-time, contract"
            />

            <label for="fname">URL or Email to apply (Required)</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Website our email.."
            />
            <div>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write whatever you want.."
                style={{ height: "200px" }}
              ></textarea>
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
