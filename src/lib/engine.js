import store from '../store'
import { startEvents } from 'events/observer'

window.gameDayInMilliseconds = 3000

const engineTick = (time) => ({
  type: 'ENGINE_TICK',
  time: time / window.gameDayInMilliseconds,
})

const loop = () => {
  const time = performance.now()
  store.dispatch(engineTick(time))
}

export const start = () => {
  window.setInterval(loop, 500)
  startEvents()
}
