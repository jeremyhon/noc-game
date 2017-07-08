import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'

import Drawer from './Drawer'
import InternCard from './InternCard'
import './Intern.css'

export class Intern extends React.Component {
  static propTypes = {
    interns: PropTypes.array.isRequired,
  }

  renderIntern = (intern, key) => (
    <InternCard key={key} {...intern} />
  )

  render() {
    return (
      <div className="intern">
        {_.map(this.props.interns, this.renderIntern)}
        <Drawer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  interns: state.interns,
})

export default connect(mapStateToProps)(Intern)
