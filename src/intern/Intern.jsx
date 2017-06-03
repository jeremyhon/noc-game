import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import InternCard from './InternCard'
import * as actions from './actions'
import './Intern.css'

class Intern extends React.Component {
  static propTypes = {
    interns: PropTypes.array.isRequired,
    addIntern: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    _.times(3, this.props.addIntern)
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
  addIntern: actions.addIntern
}

export default connect(mapStateToProps, mapDispatchToProps)(Intern)
