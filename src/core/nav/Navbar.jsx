import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import Menu from './Menu'
import './Navbar.css'

const secondToGameDayRatio = 3;

class Navbar extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string.isRequired,
    globalTime: PropTypes.number.isRequired
  }

  renderMenu = () => (
    <Menu currentPage={this.props.currentPage} />
  )

  renderClock = () => {
    const dayCount = this.props.globalTime / secondToGameDayRatio
    const day = Math.floor(dayCount % 30)
    const month = Math.floor((dayCount / 30) % 12)
    const year = Math.floor(dayCount / 360)

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

const mapStateToProps = (state) => {
  return {
    globalTime: state.app.time || 0
  }
}

export default connect(mapStateToProps)(Navbar)
