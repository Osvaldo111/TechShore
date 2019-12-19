import React from "react";
import { Route } from "react-router-dom";

export default class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return "Loading....";
  }
}
// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//   //   const signIn = { ...rest }.location;
//   var isSigned = null;
//   var loading = true;

//   console.log("The Private Route function");
//   fetch("/api/auth", {
//     method: "POST"
//   })
//     .then(result => result.json())
//     .then(result => {
//       console.log("PrivateRoute result: ", result);
//       console.log("PrivateRoute loading: ", loading);
//       loading = false;

//       //   this.setState({ isSigned: result, loading: false });
//     });
//   return <Route {...rest} render={() => children} />;

//   //   if (loading) return "Loading...";
// }

// export default PrivateRoute;
