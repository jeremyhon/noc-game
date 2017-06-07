import store from '../store'
import { engineTick } from '../actions';
import { startEvents } from 'events/observer'

window.gameDayInMilliseconds = 3000

const loop = () => {
  const time = performance.now()
  store.dispatch(engineTick(time))
}

export const start = () => {
  window.setInterval(loop, 500)
  startEvents()
}
