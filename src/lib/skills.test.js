import generateSkills from './skills'

beforeEach(() => {
  const lodash = require('lodash')
  lodash.random = jest.fn(() => 0)
});

it('should generate a skills object', () => {
  expect(generateSkills()).toEqual({
    business: 0,
    design: 0,
    technical: 0,
  })
})
