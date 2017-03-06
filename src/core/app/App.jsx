import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from '../nav'
import './App.css'

class App extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(React.PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar currentPage={this.props.location.pathname} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
