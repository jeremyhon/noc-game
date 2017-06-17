import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import InternCard from './InternCard'
import { addIntern } from '../actions'
import generateIntern from 'lib/intern'
import './Intern.css'

class Intern extends React.Component {
  static propTypes = {
    interns: PropTypes.array.isRequired,
    addIntern: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    _.times(3, () => this.props.addIntern(generateIntern()))
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
  addIntern
}

export default connect(mapStateToProps, mapDispatchToProps)(Intern)
