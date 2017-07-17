import React from 'react'
import { mount } from 'enzyme'
import skillsPropType from './skillsPropType'

const Dummy = ({skills}) => <span>{JSON.stringify(skills)}</span>

let warning

it('should warn on invalid prop types', () => {
  Dummy.propTypes = {
    skills: skillsPropType
  }
  const skills = {
    lulz: 'hello'
  }
  warning = 'Warning: Failed prop type: Required prop `business` was not specified in `Dummy`.'

  expect(() => mount(<Dummy skills={skills} />)).toThrow(warning)
})

it('should warn on absent skills', () => {
  Dummy.propTypes = {
    skills: skillsPropType.isRequired
  }
  warning = 'Warning: Failed prop type: The prop `skills` is marked as required in `Dummy`, but its value is `undefined`.'

  expect(() => mount(<Dummy />)).toThrow(warning)
})
