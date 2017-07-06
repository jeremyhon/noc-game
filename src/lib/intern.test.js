import generateIntern from './intern'

it('should generate a intern', () => {
  const intern = generateIntern()
  expect(intern).toEqual({
    gender: expect.stringMatching(/(M|F)/),
    id: expect.any(String),
    name: expect.any(String),
    skills: {
      business: expect.any(Number),
      technical: expect.any(Number),
      design: expect.any(Number),
    },
  })
})
