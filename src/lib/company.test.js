import generateCompany from './company'

it('should generate a company', () => {
  const company = generateCompany()
  expect(company).toEqual(expect.objectContaining({
    name: expect.any(String),
    needs: {
      business: expect.any(Number),
      technical: expect.any(Number),
      design: expect.any(Number),
    },
  }))
})
