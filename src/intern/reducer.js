import _ from 'lodash'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_INTERN':
      return _.concat(state, action.payload.intern)
    default:
      return state
  }
}
