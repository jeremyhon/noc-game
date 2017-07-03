import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { skills } from 'lib/data'
import skillsPropType from './skillsPropType'
import './StatsContainer.css'

const renderSkills = (skills) => _.map(skills,
  (skill, key) => (
    <p key={key}>
      <span className="stat-name">{_.startCase(key)}:</span>
      <span className="stat-value">{skill}</span>
    </p>),
)

export const SkillsContainer = (props) => (
  <div className={classnames(props.className, 'stat-container')} >
    <h3 className='stat-subtitle'>{props.subtitle}: </h3>
    {renderSkills(_.pick(props.skills, skills))}
  </div>
)

SkillsContainer.defaultProps = {
  className: '',
}

SkillsContainer.propTypes = {
  className: PropTypes.string,
  skills: skillsPropType.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default SkillsContainer
