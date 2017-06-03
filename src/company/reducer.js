import _ from 'lodash'

export default (state = [], action) => {
  switch (action.type) {
    case 'NEW_COMPANY':
      return _.concat([action.payload.company], state)
    default:
      return state
  }
}
