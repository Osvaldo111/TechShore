import React from "react";
import MainContainer from "./components/mainPage-container";
import JobDescription from "./components/job-desctiption";
import PostJobForm from "./components/form-post-job";
import LoginAdminstrador from "./components/login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StorejobsDB from "./components/storeJobsDBForm";

function App() {
  // return <MainConainer />;
  const NoMatch = ({ location }) => (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  function PrivateRoute({ children, ...rest }) {
    const signIn = { ...rest }.location;
    console.log("Inside private", signIn);

    return <Route {...rest} render={() => children} />;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/description/:id" component={JobDescription} />
        <Route path="/postJob" component={PostJobForm} />
        <Route path="/login" component={LoginAdminstrador} />
        <PrivateRoute
          path="/storeJobsDB"
          component={StorejobsDB}
        ></PrivateRoute>
        <Route path="*" component={NoMatch} />
        {/* <Route path="/NotFound" component={NoMatch} /> */}
      </Switch>
    </Router>
  );
}

export default App;
