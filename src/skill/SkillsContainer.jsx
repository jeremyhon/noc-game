import React from 'react'
import map from 'lodash/map'
import skillsPropType from '../skill/multiPropType'

const renderSkills = (skills) => map(skills, (skill, key) => (<li key={key}>{skill}</li>))

const SkillsContainer = (props) => (
  <ul>
    {renderSkills(props.skills)}
  </ul>
)

SkillsContainer.propTypes = {
  skills: skillsPropType.isRequired,
}

export default SkillsContainer
