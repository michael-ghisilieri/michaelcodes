import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './history';
import App from './App';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Games from './components/Games/Games';
import AboutMe from './components/AboutMe/AboutMe';

const createRoutes = () => {
  return (
    <Router history={history}>
      <div>
          <Route path="/" component={App}/>
          <Route path="/home" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/games" component={Games}/>
          <Route path="/about-me" component={AboutMe}/>
      </div>
    </Router>
  )
}

export default createRoutes;