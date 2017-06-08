import React from 'react'
import PropTypes from 'prop-types'

import Card from 'components/card'
import skillsPropType from 'components/stats/skillsPropType'

const CompanyCard = (props) => {
  return (
    <Card
      className="company-card"
      title={props.name}
      subtitle="Needs"
      skills={props.needs}
    />
  )
}

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  needs: skillsPropType.isRequired,
}

export default CompanyCard
