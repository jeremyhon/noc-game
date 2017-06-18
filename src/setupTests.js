import injectTapEventPlugin from 'react-tap-event-plugin'
import util from 'util'
import 'jest-enzyme'

injectTapEventPlugin()

global.performance = { now: jest.fn(() => 0) }

function logToError() {
  throw new Error(util.format.apply(this, arguments).replace(/^Error: (?:Warning: )?/, ''));
}

console.warn = logToError;
console.error = logToError;
