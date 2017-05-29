import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardText } from 'material-ui/Card'
// import map from 'lodash/map'
import SkillsContainer from '../skill/SkillsContainer'
import skillsPropType from '../skill/multiPropType'

const renderGenderIcon = (gender) => {
  if (gender === 'M') {
    return <i className="fa fa-mars" aria-hidden="true" />
  }
  return <i className="fa fa-venus" aria-hidden="true" />
}

const renderTitle = (name, gender) => (<span>{name} {renderGenderIcon(gender)}</span>)
// const renderSkills = (skills) => map(skills, (skill, key) => (<li key={key}>{skill}</li>))

const InternCard = (props) => (
  <Card className="intern-card">
    <CardTitle title={renderTitle(props.name, props.gender)} />
    <CardText>
      <SkillsContainer skills={props.skills} />
    </CardText>
  </Card>
)

InternCard.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['M', 'F']).isRequired,
  skills: skillsPropType,
}

export default InternCard
