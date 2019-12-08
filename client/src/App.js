import React from "react";
import MainContainer from "./components/mainPage-container";
import JobDescription from "./components/job-desctiption";
import PostJobForm from "./components/form-post-job";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // return <MainConainer />;
  const NoMatch = ({ location }) => (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/description/:id" component={JobDescription} />
        <Route path="/postJob" component={PostJobForm} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
