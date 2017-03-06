import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import './Navbar.scss'

class Navbar extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string.isRequired,
  }

  onTap = () => {
    console.log('tapped navbar icon')
  }

  render() {
    return (
      <AppBar
        className="navbar"
        title="Intern Manager"
        iconElementLeft={<Menu />}
        onRightIconButtonTouchTap={this.onTap}
      />
    )
  }
}

export default Navbar
