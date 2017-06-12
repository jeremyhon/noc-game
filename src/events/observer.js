import observeStore from '../baseObserver'
import store from '../store'
import _ from 'lodash'
import * as actions from '../actions'

const events = {
  NEW_INTERN: { chance: 0.1, action: actions.newIntern },
  NEW_COMPANY: { chance: 0.1, action: actions.newCompany },
}

const selectDay = (state) => {
  return Math.floor(state.time) + 1
}

window.random = Math.random

const onNewDay = (dayCount) => {
  _.each(events, (event, eventName) => {
    const roll = window.random()
    if (roll < event.chance) {
      store.dispatch(event.action())
    }
  })
}

export const startEvents = () => observeStore(selectDay, onNewDay)
