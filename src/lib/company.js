import uuidv4 from 'uuid/v4'

import { generateCompanyName } from './companyname'
import generateSkills from './skills'

const generateCompany = () => {
  const id = uuidv4()
  const name = generateCompanyName()
  const needs = generateSkills()
  const interns = []
  return {
    id,
    interns,
    name,
    needs,
  }
}

export default generateCompany
