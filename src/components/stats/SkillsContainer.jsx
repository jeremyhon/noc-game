import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import startCase from 'lodash/startCase'
import classnames from 'classnames'
import skillsPropType from './skillsPropType'
import './StatsContainer.css'

const renderSkills = (skills) => map(skills,
  (skill, key) => (
    <p key={key}>
      <span className="stat-name">{startCase(key)}:</span>
      <span className="stat-value">{skill}</span>
    </p>),
)

const SkillsContainer = (props) => (
  <div className={classnames(props.className, 'stat-container')} >
    <h3 className='stat-subtitle'>{props.subtitle}: </h3>
    {renderSkills(props.skills)}
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
