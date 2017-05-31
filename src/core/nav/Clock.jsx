import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Clock extends React.Component {
  static propTypes = {
    dayCount: PropTypes.number.isRequired,
  }

  render() {
    const day = Math.floor(this.props.dayCount % 30) + 1
    const month = Math.floor((this.props.dayCount / 30) % 12) + 1
    const year = Math.floor(this.props.dayCount / 360) + 1

    return (
      <span>
        Y: {year} M: {month} D: {day}
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dayCount: state.time || 0
  }
}

export default connect(mapStateToProps)(Clock)
