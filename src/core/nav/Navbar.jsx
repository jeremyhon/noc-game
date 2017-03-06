import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import './Navbar.scss'

const Navbar = React.createClass({
  render () {
    return (
      <AppBar
        className="navbar"
        title="Intern Manager"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
})

export default Navbar
