import injectTapEventPlugin from 'react-tap-event-plugin'
import 'jest-enzyme'

injectTapEventPlugin()

global.performance = { now: jest.fn(() => 0) }
