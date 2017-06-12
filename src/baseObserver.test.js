import observeStore from './baseObserver'

jest.mock('./store', () => ({
  subscribe: jest.fn(),
  getState: jest.fn(() => ({})),
}))

beforeEach(() => {
  jest.clearAllMocks()
})

it('should subscribe to the store', () => {
  const store = require('./store')
  const select = jest.fn()
  const onChange = jest.fn()
  observeStore(select, onChange)
  expect(store.subscribe).toHaveBeenCalled()
  expect(onChange).not.toHaveBeenCalled()
})

it('should call onChange when state is different', () => {
  const select = jest.fn(x => x)
  const onChange = jest.fn()
  observeStore(select, onChange)
  expect(onChange).toHaveBeenCalledWith({})
  expect(select).toHaveBeenCalledWith({})
})
