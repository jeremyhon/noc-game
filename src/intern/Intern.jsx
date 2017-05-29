import React from 'react'
import _ from 'lodash'
import InternCard from './InternCard'
import { generate as generateIntern } from '../lib/intern'
import './Intern.css'

export default class Intern extends React.Component {
  state = {}

  componentDidMount = () => {
    this.setState({ interns: _.times(3, generateIntern) })
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
        {this.renderInterns(this.state.interns)}
      </div>
    )
  }
}

Intern.propTypes = {}
