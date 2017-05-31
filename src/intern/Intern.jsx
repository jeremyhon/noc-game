import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import InternCard from './InternCard'
import { generate as randomIntern } from '../lib/intern'
import './Intern.css'

const generateIntern = () => ({
  type: 'GENERATE_INTERN',
  payload: { intern: randomIntern() },
})

class Intern extends React.Component {
  static propTypes = {
    interns: PropTypes.array.isRequired,
    generateIntern: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    _.times(3, this.props.generateIntern)
  }

  renderIntern = (intern, key) => (
    <InternCard key={key} {...intern} />
  )

  renderInterns = (internsList) => _.map(internsList, this.renderIntern)

  render() {
    return (
      <div className="intern">
        Hi this is the Intern component <br />
        These are your interns:
        {this.renderInterns(this.props.interns)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  interns: state.interns
})

const mapDispatchToProps = {
  generateIntern
}

export default connect(mapStateToProps, mapDispatchToProps)(Intern)
