import { start, interval } from './engine'

jest.mock('../store', () => ({
  dispatch: jest.fn()
}))

jest.mock('events/observer', () => ({
  startEvents: jest.fn()
}))

it('should start loop and events', () => {
  const store = require('../store')
  const observer = require('events/observer')
  jest.useFakeTimers()

  start()
  jest.runTimersToTime(interval)

  expect(store.dispatch).toHaveBeenCalledWith({
    type: "ENGINE_TICK",
    payload: { time: 0, },
  })
  expect(observer.startEvents).toHaveBeenCalledTimes(1)
})
