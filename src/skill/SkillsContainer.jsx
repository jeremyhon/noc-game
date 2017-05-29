import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import startCase from 'lodash/startCase'
import classnames from 'classnames'
import skillsPropType from './multiPropType'
import './SkillsContainer.css'

const renderSkills = (skills) => map(skills,
  (skill, key) => (
    <p key={key}>
      <span className="skill-name">{startCase(key)}:</span>
      <span className="skill-value">{skill}</span>
    </p>),
)

const SkillsContainer = (props) => (
  <div className={classnames(props.className, 'skill-container')} >
    {renderSkills(props.skills)}
  </div>
)

SkillsContainer.defaultProps = {
  className: '',
  style: '',
}

SkillsContainer.propTypes = {
  className: PropTypes.string,
  skills: skillsPropType.isRequired,
}

export default SkillsContainer
