import chainablePropType from '../lib/customproptypes'

const isSkillValue = (props, propName) => Number.isInteger(props[propName]) &&
  props[propName] <= 10 &&
  props[propName] >= 0

const error = (props, propName) =>
  `The prop \`${propName}\` should be a number between 0 and 10.`

const skillPropType = chainablePropType(isSkillValue, error)

export default skillPropType