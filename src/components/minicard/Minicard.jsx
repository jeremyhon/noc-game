import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import { matchIntern } from 'actions'

const Minicard = (props) => {
  return (
    <Card className="drawer-card" style={{textAlign:"left"}}>
      <div className="drawer-card-container">
        <span className="drawer-card-title">
          {props.name}
        </span>
        <span className="drawer-card-skills">
          {props.content}
        </span>
      </div>
      <div className="drawer-card-action">
        <FlatButton
          backgroundColor="#B2EBF2"
          className="match-button"
          label="match"
          onTouchTap={() => props.onMatch(props.selectedInternId, props.id)}
        />
      </div>
    </Card>
  )
}

Minicard.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onMatch: PropTypes.func.isRequired,
  selectedInternId: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  selectedInternId: state.selectedInternId,
})

const mapDispatchToProps = {
  onMatch: matchIntern,
}

export default connect(mapStateToProps, mapDispatchToProps)(Minicard)
