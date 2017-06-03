import observeStore from '../observer'
import store from '../store'
import _ from 'lodash'
import * as internActions from 'intern/actions'
import * as companyActions from 'company/actions'

const events = {
  NEW_INTERN: { chance: 0.1, action: internActions.addIntern },
  NEW_COMPANY: { chance: 0.1, action: companyActions.addCompany },
}

const selectDay = (state) => {
  return Math.floor(state.time) + 1
}

window.random = Math.random

const onNewDay = (dayCount) => {
  _.each(events, (event, eventName) => {
    const roll = window.random()
    if (roll < event.chance) {
      console.log(eventName)
      store.dispatch(event.action())
    }
  })
}

export const startEvents = () => observeStore(selectDay, onNewDay)
