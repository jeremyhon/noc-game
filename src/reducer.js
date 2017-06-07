import _ from 'lodash'

const defaultState = {
  time: 0,
  appTitle: "Intern Manager",
  interns: [],
  companies: [],
}

export default (state = defaultState, {type, payload}) => {
  let interns, companies

  switch (type) {
  case 'ENGINE_TICK':
    return { ...state, time: payload.time}
  case 'NEW_INTERN':
    interns = _.concat([payload.intern], state.interns)
    return { ...state, interns }
  case 'NEW_COMPANY':
    companies = _.concat([payload.company], state.companies)
    return { ...state, companies }
  case 'CHANGE_TITLE':
    return { ...state, appTitle: payload.title }
  default:
    return state
  }
}
