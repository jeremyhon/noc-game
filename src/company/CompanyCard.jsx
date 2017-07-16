import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Card from 'components/card'
import skillsPropType from 'components/stats/skillsPropType'
import InternList from './InternList'

const CompanyCard = ({name, needs, interns}) => {
  return (
    <Card
      className="company-card"
      title={name}
      subtitle="Needs"
      skills={needs}
    >
      { !_.isEmpty(interns) && <InternList internIds={interns} /> }
    </Card>
  )
}

CompanyCard.propTypes = {
  interns: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  needs: skillsPropType.isRequired,
}

export default CompanyCard
