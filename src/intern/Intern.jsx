import React from 'react'
import map from 'lodash/map'
import InternCard from './InternCard'
import './Intern.scss'

export default class Intern extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [{
        name: 'Barack Obama',
        gender: 'M',
      }, {
        name: 'Donald Trump',
        gender: 'M',
      }, {
        name: 'Angela Merkel',
        gender: 'F',
      }],
    }
  }

  renderStudent = (student, key) => (
    <InternCard key={key} {...student} />
  )

  renderStudents = (studentsList) => map(studentsList, this.renderStudent)

  render() {
    return (
      <div className="intern">
        Hi this is the Intern component <br />
        These are your students:
        {this.renderStudents(this.state.students)}
      </div>
    )
  }
}

Intern.propTypes = {
}
