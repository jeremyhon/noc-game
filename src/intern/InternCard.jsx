import React, { PropTypes } from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'

const InternCard = (props) => (
  <Card className="intern-card">
    <CardTitle title={props.name} />
    <CardText>
      <ul>
        <li>{props.gender}</li>
      </ul>
    </CardText>
  </Card>
)

InternCard.propTypes = {
  name: PropTypes.string.isRequired,
  gender: React.PropTypes.oneOf(['M', 'F']).isRequired,
}

export default InternCard
