import React from 'react'
import PropTypes from 'prop-types'
import skillsPropType from 'components/stats/skillsPropType'
import Card from 'components/card'

const renderGenderIcon = (gender) => {
  if (gender === 'M') {
    return <i className="fa fa-mars" aria-hidden="true" />
  }
  return <i className="fa fa-venus" aria-hidden="true" />
}

const renderTitle = (name, gender) => (<span>{name} {renderGenderIcon(gender)}</span>)

const InternCard = (props) => (
  <Card
    className="intern-card"
    title={renderTitle(props.name, props.gender)}
    subtitle="Skills"
    skills={props.skills}
  />
)

InternCard.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['M', 'F']).isRequired,
  skills: skillsPropType.isRequired,
}

export default InternCard
