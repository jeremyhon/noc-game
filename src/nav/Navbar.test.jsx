import React from 'react'
import { shallow } from 'enzyme'

import Navbar from './Navbar'

it("matches the snapshot", () => {
  expect(shallow(<Navbar />)).toMatchSnapshot()
})
