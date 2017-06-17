import _ from 'lodash'

export const defaultState = {
  time: 0,
  interns: [],
  companies: [],
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
  default:
    return state
  }
}
