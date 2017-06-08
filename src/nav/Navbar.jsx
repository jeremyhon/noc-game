import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import Clock from './Clock'
import './Navbar.css'

export const titleMap = {
  "/": "Interns",
  "/companies": "Companies",
  "/about": "About"
}

class Navbar extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    return (
      <AppBar
        className="navbar"
        title={_.get(titleMap, this.props.location.pathname, "Not Found")}
        iconElementLeft={<Menu />}
        iconElementRight={<Clock />}
      />
    )
  }
}

export default withRouter(Navbar)
