import _ from 'lodash'

const defaultState = {
  time: 0,
  interns: [],
  companies: [],
}

export default (state = defaultState, action) => {
  let interns, companies

  switch (action.type) {
  case 'ENGINE_TICK':
    return { ...state, time: action.time}
  case 'NEW_INTERN':
    interns = _.concat([action.payload.intern], state.interns)
    return { ...state, interns }
  case 'NEW_COMPANY':
    companies = _.concat([action.payload.company], state.companies)
    return { ...state, companies }
  default:
    return state
  }
}
