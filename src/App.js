import React from "react";
import MainContainer from "./components/mainPage-container";
import JobDescription from "./components/job-desctiption";
import PostJobForm from "./components/form-post-job";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // return <MainConainer />;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/description" component={JobDescription} />
        <Route path="/postJob" component={PostJobForm} />
      </Switch>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
export default App;
