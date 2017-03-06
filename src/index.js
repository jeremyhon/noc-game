import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './core/app/App';
import Intern from './intern/Intern';
import NotFound from './notfound/NotFound';
import About from './about/About';
import Company from './company/Company';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Intern}/>
      <Route path="/about" component={About}/>
      <Route path="/company" component={Company}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
, document.getElementById('root'))
