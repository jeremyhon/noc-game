import PropTypes from 'prop-types'
import skillPropType from './singlePropType'

const skillsPropType = PropTypes.shape({
  technical: skillPropType,
  business: skillPropType,
  design: skillPropType,
})

export default skillsPropType
