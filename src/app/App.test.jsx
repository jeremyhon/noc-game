import React from "react"
import { mount } from "enzyme"
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from "./App"

it("renders without crashing", () => {
  injectTapEventPlugin()
  mount(<App />)
});
