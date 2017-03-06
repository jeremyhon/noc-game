import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from '../nav/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar currentPage={this.props.location.pathname}/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
