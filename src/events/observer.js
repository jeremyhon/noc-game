import observeStore from '../baseObserver'
import store from '../store'
import _ from 'lodash'
import * as actions from '../actions'
import generateIntern from 'lib/intern'
import generateCompany from 'lib/company'

export const selectDay = (state) => {
  return Math.floor(state.time) + 1
}

const events = {
  NEW_INTERN_EVENT: { chance: 0.1, action: () => actions.addIntern(generateIntern()) },
  NEW_COMPANY_EVENT: { chance: 0.1, action: () => actions.addCompany(generateCompany()) },
}

let randomMethod = () => _.random(0, 1, true)

export const onNewDay = () => {
  _.each(events, (event, eventName) => {
    const roll = randomMethod()
    if (roll < event.chance) {
      console.log(eventName)
      store.dispatch(event.action())
    }
  })
}

export const startEvents = () => observeStore(selectDay, onNewDay)
