jest.mock('./reducer', () => {
  return {a: 'thing'}
})

jest.mock('redux', () => {
  return {
    createStore: jest.fn(() => {}),
  }
})

it('should create a store from reducers', () => {
  require('./store')
  const reducer = require('./reducer')
  const createStore = require('redux').createStore
  expect(createStore).toHaveBeenCalledWith(reducer, undefined, undefined)
});
