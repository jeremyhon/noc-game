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
    >
      {props.interns}
    </Card>
  )
}

CompanyCard.propTypes = {
  interns: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  needs: skillsPropType.isRequired,
}

export default CompanyCard
