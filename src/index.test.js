import React from 'react'

jest.mock('react-tap-event-plugin')
jest.mock('./registerServiceWorker')
jest.mock('react-dom', () => ({
  render: jest.fn()
}))
jest.mock('./app', () => {
  return () => (<div />)
})

it('should render and call setup methods', () => {
  document.body.innerHTML = '<div id="root" />'
  const root = document.getElementById('root')
  const injectTapEventPlugin = require('react-tap-event-plugin')
  const registerServiceWorker = require('./registerServiceWorker').default
  const render = require('react-dom').render
  const App = require('./app')

  require('./index')

  expect(injectTapEventPlugin).toHaveBeenCalled()
  expect(registerServiceWorker).toHaveBeenCalled()
  expect(render).toHaveBeenCalledWith(<App />, root)
})
