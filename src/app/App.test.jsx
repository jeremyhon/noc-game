import React from "react"
import { mount, shallow } from "enzyme"
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from "./App"

import { interval } from 'lib/engine'

it("matches the snapshot", () => {
  expect(shallow(<App />)).toMatchSnapshot()
})

it("renders without crashing", () => {
  mount(<App />)
})

fit('runs the engine and event system', () => {
  const store = require('../store').default
  jest.spyOn(store, 'dispatch')
  const lodash = require('lodash')
  lodash.random = jest.fn(() => 0)
  jest.useFakeTimers()
  mount(<App />)
  jest.runTimersToTime(interval)
  expect(store.dispatch).toHaveBeenCalledWith({
    type: "ENGINE_TICK",
    payload: {time: 0},
  })
  store.dispatch.mockClear()
  jest.runTimersToTime(6000)
  console.log(store.getState())
  expect(store.dispatch).toHaveBeenCalledWith({
    type: "ADD_INTERN",
    payload: expect.anything()
  })
})
