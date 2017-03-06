import React, { PropTypes } from "react"
import AppBar from "material-ui/AppBar"
import Menu from "./Menu"
import "./Navbar.scss"

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
