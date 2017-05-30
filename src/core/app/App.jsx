import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from '../nav'
import loop from './engine'
import './App.css'

class App extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  componentDidMount = () => {
    window.requestAnimationFrame(loop)
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
