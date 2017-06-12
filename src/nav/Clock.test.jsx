import React from 'react'
import { shallow } from 'enzyme'

import Clock from './Clock'

it("matches the snapshot", () => {
  expect(shallow(<Clock />)).toMatchSnapshot()
})
