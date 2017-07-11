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

it('runs the engine and produces tick actions', () => {
  const store = require('../store').default
  jest.spyOn(store, 'dispatch')
  jest.useFakeTimers()

  // check engine is ticking
  mount(<App />)
  jest.runTimersToTime(interval)

  expect(store.dispatch).toHaveBeenCalledWith({
    type: "ENGINE_TICK",
    payload: {time: 0},
  })
})

it('runs the event system', () => {
  const store = require('../store').default
  jest.spyOn(store, 'dispatch')
  require('lodash').random = () => 0
  jest.useFakeTimers()

  mount(<App />)

  // fast-forward clock and check events are being created
  global.performance.now = () => 3000
  jest.runTimersToTime(interval)

  expect(store.dispatch).toHaveBeenCalledWith({
    type: "ADD_NEW_INTERN",
    payload: expect.anything()
  })
})

it('populates interns and companies', () => {
  const store = require('../store').default
  jest.spyOn(store, 'dispatch')

  mount(<App />)

  expect(store.dispatch).toHaveBeenCalledWith({
    type: 'POPULATE_INTERNS', payload: expect.anything()
  })
  expect(store.dispatch).toHaveBeenCalledWith({
    type: 'POPULATE_COMPANIES', payload: expect.anything()
  })
})
