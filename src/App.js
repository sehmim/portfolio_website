import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllProjects from './pages/AllProjects';
import AllJobs from "./pages/AllJobs";
import Experience from "./pages/Experience";
import Blogs from './pages/Blogs';
import Band from './pages/Band';
import LandingPageOld from "./pages/LandingPageOld";
function RouteController() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/projects" component={AllProjects} />
        <Route path="/jobs" component={AllJobs} />
      </div>
    </Router>
  )
}


function App() {
  return (
    <div className="App">
      <LandingPageOld />
      {/* <LandingPage /> */}
      <Experience />
      <Projects />
      <Blogs></Blogs>
      <Band></Band>
    </div>
  );
}

export default RouteController;
