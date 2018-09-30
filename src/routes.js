import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
/*
import history from './history'
import App from './App'
*/
import Home from './components/Home/Home'
import About from './components/About/About'
import Header from './header'
import Footer from './footer'
import Error404 from './components/Error/Error'
import Professional from './components/Professional/Professional'

const createRoutes = () => {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <div className="body-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/professional" component={Professional} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default createRoutes
