import observeStore from '../baseObserver'
import store from '../store'
import _ from 'lodash'
import * as actions from '../actions'

export const selectDay = (state) => {
  return Math.floor(state.time) + 1
}

const events = {
  NEW_INTERN_EVENT: { chance: 0.1, action: () => actions.addNewIntern() },
  NEW_COMPANY_EVENT: { chance: 0.1, action: () => actions.addNewCompany() },
}

let randomMethod = () => _.random(0, 1, true)

export const onNewDay = () => {
  _.each(events, (event, eventName) => {
    const roll = randomMethod()
    if (roll < event.chance) {
      store.dispatch(event.action())
    }
  })
}

export const startEvents = () => observeStore(selectDay, onNewDay)
