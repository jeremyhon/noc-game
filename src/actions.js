import _ from 'lodash'

import generateIntern from 'lib/intern'
import generateCompany from 'lib/company'

export const boilerPlateAction = (type, payload) => ({ type, payload })

export const matchIntern = (internId, companyId) => boilerPlateAction(
  'MATCH_INTERN',
  { internId, companyId }
)

export const deselectIntern = () => boilerPlateAction(
  'DESELECT_INTERN'
)

export const selectIntern = (id) => boilerPlateAction(
  'SELECT_INTERN',
  { selectedInternId: id }
)

export const addNewIntern = () => boilerPlateAction(
  'ADD_NEW_INTERN',
  { intern: generateIntern() }
)

export const addNewCompany = (company = generateCompany()) => boilerPlateAction(
  'ADD_NEW_COMPANY',
  { company },
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
