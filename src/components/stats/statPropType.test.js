import React from 'react'
import { shallow, mount } from 'enzyme'
import statPropType from './statPropType'

const Dummy = () => <span />

const warning = "Warning: Failed prop type: The prop `business` should be a number between 0 and 10."

it('should warn on invalid prop types', () => {
  Dummy.propTypes = {
    business: statPropType
  }
  const business = "invalid"

  expect(() => shallow(<Dummy business={business} />)).toThrow(warning)
})

it('should warn on absent prop type', () => {
  Dummy.propTypes = {
    business: statPropType.isRequired
  }

  expect(() => mount(<Dummy />)).toThrow()
})
