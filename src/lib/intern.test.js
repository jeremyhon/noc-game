import generateIntern from './intern'

it('should generate a intern', () => {
  const intern = generateIntern()
  expect(intern).toEqual({
    name: expect.any(String),
    gender: expect.stringMatching(/(M|F)/),
    skills: {
      business: expect.any(Number),
      technical: expect.any(Number),
      design: expect.any(Number),
    },
  })
})
