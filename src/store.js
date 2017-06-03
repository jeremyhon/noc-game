import { createStore } from 'redux'
import rootReducer from './core/reducer'

const startStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default startStore()
