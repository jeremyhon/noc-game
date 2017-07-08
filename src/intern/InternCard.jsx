import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'

import { selectIntern } from '../actions'
import skillsPropType from 'components/stats/skillsPropType'
import Card from 'components/card'

const renderGenderIcon = (gender) => {
  if (gender === 'M') {
    return <i className="fa fa-mars" aria-hidden="true" />
  }
  return <i className="fa fa-venus" aria-hidden="true" />
}

const renderTitle = (name, gender) => (<span>{name} {renderGenderIcon(gender)}</span>)

export const InternCard = (props) => (
  <Card
    className="intern-card"
    title={renderTitle(props.name, props.gender)}
    subtitle="Skills"
    skills={props.skills}
  >
    <div className="card-action">
      <FlatButton
        className="match-button"
        backgroundColor="#B2EBF2"
        label="match with company"
        onTouchTap={() => props.selectIntern(props.id)}
      />
    </div>
  </Card>
)

InternCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['M', 'F']).isRequired,
  skills: skillsPropType.isRequired,
}

const mapDispatchToProps = {
  selectIntern,
}

export default connect(undefined, mapDispatchToProps)(InternCard)
