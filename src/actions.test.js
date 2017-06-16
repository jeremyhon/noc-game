import * as actions from './actions'

jest.mock('lib/intern', () => {
  return jest.fn(() => "lulz")
})

jest.mock('lib/company', () => {
  return jest.fn(() => "ggwp")
})

const boilerPlateAction = (type, payload) => ({ type, payload })

beforeEach(() => {
  jest.clearAllMocks()
});

it('should generate a new intern action', () => {
  const generateIntern = require('lib/intern')
  const expectedAction = boilerPlateAction('NEW_INTERN', {intern:"lulz"})
  expect(actions.newIntern()).toEqual(expectedAction)
  expect(generateIntern).toHaveBeenCalled()
})

it('should generate a new company action', () => {
  const generateCompany = require('lib/company')
  const expectedAction = boilerPlateAction('NEW_COMPANY', {company:"ggwp"})
  expect(actions.newCompany()).toEqual(expectedAction)
  expect(generateCompany).toHaveBeenCalled()
})

it('should generate an engine tick', () => {
  window.gameDayInMilliseconds = 3
  const expectedAction = boilerPlateAction('ENGINE_TICK', {time: 4})
  expect(actions.engineTick(12)).toEqual(expectedAction)
})
