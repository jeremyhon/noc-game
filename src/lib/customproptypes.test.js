import customPropType from './customproptypes'

let propType
let props

beforeEach(() => {
  const predicate = (props, propName, componentName) => {
    return props[propName] === 'prop'
  }

  const err = (props, propName, componentName) => {
    return `${props}, ${propName}, ${componentName}`
  }

  propType = customPropType(predicate, err)
})

it('should return null if correct', () => {
  props = { test: 'prop' }
  expect(propType(props, 'test')).toBe(null)
})

it('should return null if empty and not required', () => {
  expect(propType({}, 'test')).toBe(null)
})

it('should error if empty and is required', () => {
  const error = new Error('Required prop `test` was not specified in `component`.')
  expect(propType.isRequired({}, 'test', 'component')).toEqual(error)
})

it('should give the correct error message on failure', () => {
  props = { test: 'props' }
  const error = new Error(`${props}, test, component`)
  expect(propType(props, 'test', 'component')).toEqual(error)
})
