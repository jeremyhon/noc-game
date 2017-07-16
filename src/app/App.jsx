import React from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route path="/noc-game" component={AppRoutes} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = {
  populateInterns,
  populateCompanies,
}

const ConnectedApp = connect(undefined, mapDispatchToProps)(App)

class Framework extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <ConnectedApp />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default Framework
