import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from 'store'
import Navbar from 'nav'
import Intern from 'intern'
import NotFound from 'notfound'
import About from 'about'
import Company from 'company'
import * as engine from 'lib/engine'
import './App.css'

class App extends React.Component {
  componentDidMount = () => {
    //start your engineeesssss~
    engine.start()
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider>
            <div className="app">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Intern} />
                <Route path="/about" component={About} />
                <Route path="/companies" component={Company} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
