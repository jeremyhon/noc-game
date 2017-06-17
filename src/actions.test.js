import * as actions from './actions'

const boilerPlateAction = (type, payload) => ({ type, payload })

beforeEach(() => {
  jest.clearAllMocks()
});

it('should generate a new intern action', () => {
  const generateIntern = require('lib/intern')
  const expectedAction = boilerPlateAction('ADD_INTERN', {intern:"lulz"})
  expect(actions.addIntern("lulz")).toEqual(expectedAction)
  expect(generateIntern).toHaveBeenCalled()
})

it('should generate a new company action', () => {
  const generateCompany = require('lib/company')
  const expectedAction = boilerPlateAction('ADD_COMPANY', {company:"ggwp"})
  expect(actions.addCompany("ggwp")).toEqual(expectedAction)
  expect(generateCompany).toHaveBeenCalled()
})

it('should generate an engine tick', () => {
  window.gameDayInMilliseconds = 3
  const expectedAction = boilerPlateAction('ENGINE_TICK', {time: 4})
  expect(actions.engineTick(12)).toEqual(expectedAction)
})
