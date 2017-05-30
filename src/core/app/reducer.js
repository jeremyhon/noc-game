export default (state = [], action) => {
  switch (action.type) {
    case 'ENGINE_TICK':
      return { ...state, time: action.time }
    default:
      return state
  }
}
