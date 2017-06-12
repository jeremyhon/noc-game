import React from 'react'
import { shallow } from 'enzyme'

import NotFound from './NotFound'

it("matches the snapshot", () => {
  expect(shallow(<NotFound />)).toMatchSnapshot()
})
