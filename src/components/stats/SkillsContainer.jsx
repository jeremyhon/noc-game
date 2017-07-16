import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import CardSubList from 'components/card/CardSubList'
import { skills as skillsToPick } from 'lib/data'
import skillsPropType from './skillsPropType'
import './StatsContainer.css'

// const renderSkills = (skills) => _.map(skills,
//   (skill, key) => (
//     <p key={key}>
//       <span className="stat-name">{_.startCase(key)}:</span>
//       <span className="stat-value">{skill}</span>
//     </p>),
// )

const SkillsListRenderer = ({list}) => _.map(list,
  (skill, key) => (
    <p key={key}>
      <span className="stat-name">{_.startCase(key)}:</span>
      <span className="stat-value">{skill}</span>
    </p>
  ),
)

export const SkillsContainer = ({subtitle, skills}) => (
  <CardSubList
    className="stat-container"
    subtitle={subtitle}
    list={_.pick(skills, skillsToPick)}
    ListComponent={SkillsListRenderer}
  />
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
