import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  injectTapEventPlugin()
  ReactDOM.render(<App />, div);
});
