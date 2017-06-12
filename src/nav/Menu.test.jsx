import React from 'react'
import { shallow } from 'enzyme'

import Menu from './Menu'

it("matches the snapshot", () => {
  expect(shallow(<Menu />)).toMatchSnapshot()
})
