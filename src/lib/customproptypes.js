const chainablePropType = (predicate, err) => {
  const validatePropType = (props, propName, componentName) => {
    return predicate(props, propName, componentName) ? null
      : new Error(err(props, propName, componentName))
  }

  const propType = (props, propName, componentName) => {
    // don't do any validation if empty
    if (props[propName] == null) {
      return null
    }
    return validatePropType(props, propName, componentName)
  }

  propType.isRequired = (props, propName, componentName) => {
    // warn if empty
    if (props[propName] == null) {
      return new Error(`Required prop \`${propName}\` was not specified in \`${componentName}\`.`)
    }
    return validatePropType(props, propName, componentName)
  }

  return propType
}

export default chainablePropType
