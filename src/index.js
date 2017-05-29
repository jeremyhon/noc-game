import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import registerServiceWorker from './registerServiceWorker';

import App from './core/app'
import Intern from './intern'
import NotFound from './notfound'
import About from './about'
import Company from './company'
import './index.scss'

injectTapEventPlugin()

const BaseApp = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Intern} />
      <Route path="/about" component={About} />
      <Route path="/companies" component={Company} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

ReactDOM.render(
  <BaseApp />
, document.getElementById('root'))

// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>
//   , document.getElementById('root'))
// }
registerServiceWorker()
