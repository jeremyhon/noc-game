import _ from 'lodash'

export const defaultState = {
  time: 0,
  interns: [],
  companies: [],
  selectedInternId: ""
}

const addInternToCompany = ({companies}, {internId, companyId}) => {
  return _.map(companies, (company) => {
    if (company.id !== companyId) {
      return company
    }
    const interns = _.concat(company.interns, internId)
    return { ...company, interns }
  })
}

const markInternAsMatched = ({interns}, {internId}) => {
  return _.map(interns, (intern) => {
    if (intern.id !== internId) {
      return intern
    }
    return { ...intern, matched: true }
  })
}

export default (state = defaultState, {type, payload}) => {
  let interns, companies

  switch (type) {
  case 'ENGINE_TICK':
    return { ...state, time: payload.time }
  case 'ADD_NEW_INTERN':
    interns = _.concat([payload.intern], state.interns)
    return { ...state, interns }
  case 'POPULATE_INTERNS':
    return { ...state, interns: payload.interns }
  case 'ADD_NEW_COMPANY':
    companies = _.concat([payload.company], state.companies)
    return { ...state, companies }
  case 'POPULATE_COMPANIES':
    return { ...state, companies: payload.companies }
  case 'SELECT_INTERN':
    return { ...state, selectedInternId: payload.selectedInternId }
  case 'DESELECT_INTERN':
    return { ...state, selectedInternId: "" }
  case 'MATCH_INTERN':
    companies = addInternToCompany(state, payload)
    interns = markInternAsMatched(state, payload)
    return {
      ...state,
      companies,
      interns,
      selectedInternId: "",
    }
  default:
    return state
  }
}
