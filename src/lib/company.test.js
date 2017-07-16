import generateCompany from './company'

it('should generate a company', () => {
  const company = generateCompany()
  expect(company).toEqual({
    id: expect.any(String),
    interns: expect.any(Array),
    name: expect.any(String),
    needs: {
      business: expect.any(Number),
      technical: expect.any(Number),
      design: expect.any(Number),
    },
  })
})
