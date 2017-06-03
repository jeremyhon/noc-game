import { createStore } from 'redux'
import rootReducer from './reducer'

const startStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

const store = startStore()

export default store
