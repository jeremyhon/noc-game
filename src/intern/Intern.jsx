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
        skills: {
          technical: 6,
          business: 8,
          design: 5,
        },
      }, {
        name: 'Donald Trump',
        gender: 'M',
        skills: {
          technical: 3,
          business: 3,
          design: 5,
        },
      }, {
        name: 'Angela Merkel',
        gender: 'F',
        skills: {
          technical: 8,
          business: 4,
          design: 6,
        },
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
