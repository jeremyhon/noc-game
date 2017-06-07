import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import InternCard from './InternCard'
import { newIntern } from '../actions'
import './Intern.css'

class Intern extends React.Component {
  static propTypes = {
    interns: PropTypes.array.isRequired,
    newIntern: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    _.times(3, this.props.newIntern)
  }

  renderIntern = (intern, key) => (
    <InternCard key={key} {...intern} />
  )

  render() {
    return (
      <div className="intern">
        {_.map(this.props.interns, this.renderIntern)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  interns: state.interns
})

const mapDispatchToProps = {
  newIntern
}

export default connect(mapStateToProps, mapDispatchToProps)(Intern)
