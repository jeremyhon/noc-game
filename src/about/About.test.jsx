import React from 'react'
import { shallow } from 'enzyme'

import About from './About'

it('matches the snapshot', () => {
  expect(shallow(<About />)).toMatchSnapshot()
})
