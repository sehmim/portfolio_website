import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllProjects from './pages/AllProjects';
import AllJobs from "./pages/AllJobs";
import Experience from "./pages/Experience";
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
      <LandingPage />
      <Experience />
      <Projects />
    </div>
  );
}

export default RouteController;
