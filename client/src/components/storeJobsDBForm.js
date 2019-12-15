import React, { Component } from "react";

/**
 * @author Osvaldo Carrillo
 * Date: 12/14/19
 * This class is designed to store the jobs of StackOveflow feed
 * into the DB. This can be access after the administrador provide
 * their credentials.
 */
export default class StorejobsDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linktoStackOFeed: ""
    };
  }

  componentDidMount() {
    console.log(this.props.location);
  }

  render() {
    return (
      <div>
        <h1>Osvaldo</h1>
      </div>
    );
  }
}
