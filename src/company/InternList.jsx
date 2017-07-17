import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'

import './InternList.css'

const renderInterns = (interns) => _.map(interns,
  (intern) => (
    <p key={intern}>
      <span className="company-intern">{intern}</span>
    </p>),
)

const InternList = ({selectedInternNames}) => (
  <div className='intern-container' >
    <h3 className='intern-subtitle'>Interns: </h3>
    {renderInterns(selectedInternNames)}
  </div>
)

InternList.propTypes = {
  selectedInternNames: PropTypes.array.isRequired,
}

const mapStateToProps = ({interns}, {internIds}) => {
  const findInternNameById = (internId) => _.find(interns, ['id', internId]).name
  const selectedInternNames = _.map(internIds, findInternNameById)
  return { selectedInternNames }
}

export default connect(mapStateToProps)(InternList)
