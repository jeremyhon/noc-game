import React, { PropTypes } from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import map from 'lodash/map'
import skillPropType from '../lib/skill'

const renderGenderIcon = (gender) => {
  if (gender === 'M') {
    return <i className="fa fa-mars" aria-hidden="true" />
  }
  return <i className="fa fa-venus" aria-hidden="true" />
}

const renderTitle = (name, gender) => (<span>{name} {renderGenderIcon(gender)}</span>)
const renderSkills = (skills) => map(skills, (skill, key) => (<li key={key}>{skill}</li>))

const InternCard = (props) => (
  <Card className="intern-card">
    <CardTitle title={renderTitle(props.name, props.gender)} />
    <CardText>
      <ul>
        {renderSkills(props.skills)}
      </ul>
    </CardText>
  </Card>
)

InternCard.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['M', 'F']).isRequired,
  skills: PropTypes.arrayOf(skillPropType).isRequired,
}

export default InternCard
