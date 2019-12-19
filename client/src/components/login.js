import React from "react";
import { Redirect } from "react-router-dom";

/**
 * @author Osvaldo Carrillo
 * Date: 14/14/19
 * This class is the login page for the
 * administrador.
 */

export default class LoginAdministrador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isSigned: null,
      errorMessages: "",
      loading: true
    };
  }

  componentDidMount() {
    //Check the authorization for cookies
    this.getAuthorization();
  }

  getUsernameCredentials = event => {
    this.setState({ username: event.target.value });
  };

  getPasswordCredentials = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmission = event => {
    console.log("User: ", this.state.username);
    console.log("Password: ", this.state.password);

    var userCredentials = {
      username: this.state.username,
      password: this.state.password
    };
    this.getApprovalForLogin(userCredentials);

    event.preventDefault();
  };

  getApprovalForLogin = credentials => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ credentials: credentials })
    })
      .then(result => result.json())
      .then(result => {
        console.log("The result: ", result);
        this.setState({ isSigned: result });
      });
  };

  getAuthorization = () => {
    console.log("The authorization function");
    fetch("/api/auth", {
      method: "POST"
    })
      .then(result => result.json())
      .then(result => {
        console.log("The result: ", result);
        this.setState({ isSigned: result, loading: false });
      });
  };
  render() {
    if (this.state.loading) {
      return "Loading...";
    }
    if (this.state.isSigned) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <div className="post-job-form-container">
          <form
            action="/action_page.php"
            className="post-job-form"
            onSubmit={this.handleSubmission}
          >
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <label>User Name (Required)</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Company.."
              onChange={this.getUsernameCredentials}
              value={this.state.username}
              required
            />
            <label>Password (Required)</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Postion"
              onChange={this.getPasswordCredentials}
              value={this.state.password}
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
