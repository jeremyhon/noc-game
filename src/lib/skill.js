import chainablePropType from '../lib/customproptypes'

const isSkillValue = (props, propName) => Number.isInteger(props[propName]) &&
  props[propName] <= 10 &&
  props[propName] >= 0

const skillPropType = chainablePropType(isSkillValue)

export default skillPropType
