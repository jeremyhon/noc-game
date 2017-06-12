import observeStore from '../baseObserver'
import store from '../store'
import _ from 'lodash'
import * as actions from '../actions'

export const selectDay = (state) => {
  return Math.floor(state.time) + 1
}

const events = {
  NEW_INTERN: { chance: 0.1, action: actions.newIntern },
  NEW_COMPANY: { chance: 0.1, action: actions.newCompany },
}

let randomMethod = Math.random

export const onNewDay = () => {
  _.each(events, (event, eventName) => {
    const roll = randomMethod()
    if (roll < event.chance) {
      store.dispatch(event.action())
    }
  })
}

export const setRandomMethod = (randFunc) => { randomMethod = randFunc }

export const startEvents = () => observeStore(selectDay, onNewDay)
