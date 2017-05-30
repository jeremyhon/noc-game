import { store } from '../../index'

const engineTick = (time) => ({
  type: 'ENGINE_TICK',
  time: time / 1000,
})

export const loop = () => {
  const time = performance.now()
  store.dispatch(engineTick(time))
}
