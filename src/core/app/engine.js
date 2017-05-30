export let globalTime = 0

export const loop = () => {
  globalTime = performance.now()
  console.log(globalTime)
}
