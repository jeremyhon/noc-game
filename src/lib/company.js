import { generateCompanyName } from './companyname'
import generateSkills from './skills'

const generateCompany = () => {
  const name = generateCompanyName()
  const needs = generateSkills()
  return {
    name,
    needs,
  }
}

export default generateCompany
