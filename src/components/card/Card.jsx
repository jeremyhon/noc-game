import React from 'react'
import PropTypes from 'prop-types'
import { Card as MuiCard, CardTitle, CardText } from 'material-ui/Card'
import { SkillsContainer, skillsPropType } from '../stats'
import './card.css'

const Card = (props) => (
  <MuiCard className={`card ${props.className}`}>
    <CardTitle style={{padding: 0}} title={props.title} />
    <CardText style={{padding: 0}}>
      <SkillsContainer subtitle={props.subtitle} skills={props.skills} />
    </CardText>
  </MuiCard>
)

Card.defaultProps = {
  className: ""
}

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired,
  skills: skillsPropType.isRequired,
}

export default Card
