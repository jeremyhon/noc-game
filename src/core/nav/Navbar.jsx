import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import Clock from './Clock'
import './Navbar.css'

class Navbar extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string.isRequired,
  }

  renderMenu = () => (
    <Menu currentPage={this.props.currentPage} />
  )

  render() {
    return (
      <AppBar
        className="navbar"
        title="Intern Manager"
        iconElementLeft={this.renderMenu()}
        iconElementRight={<Clock />}
      />
    )
  }
}

export default Navbar
