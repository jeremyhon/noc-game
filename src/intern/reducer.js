import _ from 'lodash'

export default (state = [], action) => {
  switch (action.type) {
    case 'NEW_INTERN':
      return _.concat([action.payload.intern], state)
    default:
      return state
  }
}
