import _ from 'lodash'

import generateIntern from 'lib/intern'
import generateCompany from 'lib/company'

const boilerPlateAction = (type, payload) => ({ type, payload })

export const addNewIntern = () => boilerPlateAction(
  'ADD_NEW_INTERN',
  { intern: generateIntern() }
)

export const addNewCompany = () => boilerPlateAction(
  'ADD_NEW_COMPANY',
  { company: generateCompany() },
)

export const populateInterns = (number) => boilerPlateAction(
  'POPULATE_INTERNS',
  { interns: _.map(_.range(number), generateIntern) }
)

export const populateCompanies = (number) => boilerPlateAction(
  'POPULATE_COMPANIES',
  { companies: _.map(_.range(number), generateCompany) }
)

export const engineTick = (time) => boilerPlateAction(
  'ENGINE_TICK',
  { time: time / window.gameDayInMilliseconds },
)
