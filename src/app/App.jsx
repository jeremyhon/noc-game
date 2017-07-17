import React from 'react'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import store from 'store'
import Navbar from 'nav'
import Intern from 'intern'
import NotFound from 'notfound'
import About from 'about'
import Company from 'company'
import * as engine from 'lib/engine'
import { populateInterns, populateCompanies } from 'actions'
import './App.css'

const AppRoutes = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.url} component={Intern} />
      <Route path={`${match.url}/about`} component={About} />
      <Route path={`${match.url}/companies`} component={Company} />
    </Switch>
  )
}

export class App extends React.Component {
  componentDidMount = () => {
    //start your engineeesssss~
    engine.start()
    this.props.populateInterns(3)
    this.props.populateCompanies(3)
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/noc-game" component={AppRoutes} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = {
  populateInterns,
  populateCompanies,
}

export const ConnectedApp = withRouter(connect(undefined, mapDispatchToProps)(App))

class Framework extends React.Component {
  render() {
    const { Router } = this.props
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router>
            <ConnectedApp />
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

Framework.propTypes = {
  Router: PropTypes.func
}

Framework.defaultProps = {
  Router: BrowserRouter
}

export default Framework
