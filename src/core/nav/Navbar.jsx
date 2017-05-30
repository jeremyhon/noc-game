import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import { globalTime } from '../app/engine'
import './Navbar.css'

class Navbar extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string.isRequired,
    globalTime: PropTypes.number.isRequired,
  }

  renderMenu = () => (
    <Menu currentPage={this.props.currentPage} />
  )

  renderClock = () => {
    const globalTime = this.props.globalTime
    const day = Math.floor(globalTime % 30)
    const month = Math.floor((globalTime / 30) % 12)
    const year = Math.floor(globalTime / 360)

    return (
      <span>
        Y: {year} M: {month} D: {day}
      </span>
    )
  }

  render() {
    return (
      <AppBar
        className="navbar"
        title="Intern Manager"
        iconElementLeft={this.renderMenu()}
        iconElementRight={this.renderClock()}
      />
    )
  }
}

const NavbarWrapper = (props) => {
  return (
    <Navbar {...props} globalTime={globalTime}/>
  )
}

export default NavbarWrapper
