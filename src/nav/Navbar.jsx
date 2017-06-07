import React from 'react'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import Clock from './Clock'
import './Navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <AppBar
        className="navbar"
        title="Intern Manager"
        iconElementLeft={<Menu />}
        iconElementRight={<Clock />}
      />
    )
  }
}

export default Navbar
