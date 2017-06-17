import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

global.performance = { now: jest.fn(() => 0) }
