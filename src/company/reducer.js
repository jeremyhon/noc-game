import _ from 'lodash'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMPANY':
      return _.concat(state, action.payload.company)
    default:
      return state
  }
}
