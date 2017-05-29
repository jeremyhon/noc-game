import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
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
      />
    )
  }
}

export default Navbar
