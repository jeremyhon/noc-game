import React from "react"
import { mount, shallow } from "enzyme"
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from "./App"

it("matches the snapshot", () => {
  expect(shallow(<App />)).toMatchSnapshot()
})

it("renders without crashing", () => {
  injectTapEventPlugin()
  mount(<App />)
});
