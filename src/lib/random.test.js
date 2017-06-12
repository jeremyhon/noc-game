import randomIndex from './random'

jest.mock('lodash/random', () => {
  return (length) => length;
})

it('should call the index given by random', () => {
  const array = ['abc', 'def']
  expect(randomIndex(array)).toEqual('def')
})
