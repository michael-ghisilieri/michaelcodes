import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import history from './history'
import App from './App'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Header from './header'
import Footer from './footer'
import Error404 from './components/Error/Error'

const createRoutes = () => {
  return (
    <Router history={history}>
      <div className="page-container">
        <Header />
        <div className="body-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default createRoutes