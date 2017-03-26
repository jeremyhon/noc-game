import React, { PropTypes } from 'react'
import map from 'lodash/map'
import skillPropType from '../../lib/skill'

const renderSkills = (skills) => map(skills, (skill, key) => (<li key={key}>{skill}</li>))

const SkillsContainer = (props) => (
  <ul>
    {renderSkills(props.skills)}
  </ul>
)

SkillsContainer.propTypes = {
  skills: PropTypes.arrayOf(skillPropType).isRequired,
}

export default SkillsContainer
