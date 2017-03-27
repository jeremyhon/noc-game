import { PropTypes } from 'react'
import skillPropType from './singlePropType'

const skillsPropType = PropTypes.shape({
  technical: skillPropType,
  business: skillPropType,
  design: skillPropType,
})

export default skillsPropType
