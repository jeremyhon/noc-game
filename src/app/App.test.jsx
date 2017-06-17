import React from "react"
import { mount, shallow } from "enzyme"
import App from "./App"

import { interval } from 'lib/engine'

it("matches the snapshot", () => {
  expect(shallow(<App />)).toMatchSnapshot()
})

it("renders without crashing", () => {
  mount(<App />)
})

it('runs the engine and event system', () => {
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

  global.performance.now = () => 3000
  jest.runTimersToTime(interval)

  expect(store.dispatch).toHaveBeenCalledWith({
    type: "ADD_NEW_INTERN",
    payload: expect.anything()
  })
})
