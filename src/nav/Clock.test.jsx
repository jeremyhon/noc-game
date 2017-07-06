import React from 'react'
import { shallow } from 'enzyme'

import ConnectedClock, { Clock } from './Clock'

it("matches the snapshot", () => {
  expect(shallow(<Clock dayCount={1} />)).toMatchSnapshot()
})
