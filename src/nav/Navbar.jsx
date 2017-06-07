import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import Clock from './Clock'
import './Navbar.css'

class Navbar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <AppBar
        className="navbar"
        title={this.props.title}
        iconElementLeft={<Menu />}
        iconElementRight={<Clock />}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.appTitle,
})

export default withRouter(connect(mapStateToProps)(Navbar))
