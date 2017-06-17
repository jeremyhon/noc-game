import * as observer from './observer'

jest.mock('../baseObserver')
jest.mock('../store', () => ({
  dispatch: jest.fn(),
}))

let lodash

beforeEach(() => {
  jest.clearAllMocks()
  lodash = require('lodash')
  lodash.random = jest.fn(() => 0)
});

it('should register the correct functions', () => {
  const observeStore = require('../baseObserver').default
  observer.startEvents()
  expect(observeStore).toHaveBeenCalledWith(observer.selectDay, observer.onNewDay)
})

it('should calculate the day correctly', () => {
  const state = { time: 0.333 }
  expect(observer.selectDay(state)).toBe(1)
})

it('should dispatch events correctly', () => {
  const dispatch = require('../store').dispatch
  observer.onNewDay()
  expect(dispatch).toHaveBeenCalledTimes(2)
  expect(dispatch.mock.calls[0][0].type).toEqual('ADD_INTERN')
  expect(dispatch.mock.calls[1][0].type).toEqual('ADD_COMPANY')
})

it('should not dispatch events when the roll is too high', () => {
  lodash.random = jest.fn(() => 0.2)
  const dispatch = require('../store').dispatch
  observer.onNewDay()
  expect(dispatch).not.toHaveBeenCalled()
})
