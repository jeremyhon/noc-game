import React from 'react'
import { shallow } from 'enzyme'

import store from '../store'
import ConnectedClock, { Clock } from './Clock'

it("matches the snapshot", () => {
  expect(shallow(<Clock dayCount={1} />)).toMatchSnapshot()
})

it("receives the day count from the store correctly", () => {
  expect(shallow(<ConnectedClock store={store} />)).toMatchSnapshot()
})
