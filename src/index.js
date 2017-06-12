import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import registerServiceWorker from './registerServiceWorker';

import App from './app'
import './index.css'

injectTapEventPlugin()

render(<App />, document.getElementById('root'))

registerServiceWorker()
