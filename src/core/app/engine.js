let lastRender = 0

const update = (progress) => {
}

const draw = () => {

}

const loop = (timestamp) => {
  const progress = timestamp - lastRender
  update(progress)
  draw()
  lastRender = timestamp
  window.requestAnimationFrame(loop)
}

export default loop
