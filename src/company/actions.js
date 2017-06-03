import generateCompany from 'lib/company'

export const addCompany = () => ({
  type: 'NEW_COMPANY',
  payload: { company: generateCompany() },
})
