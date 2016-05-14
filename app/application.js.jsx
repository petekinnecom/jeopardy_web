import React from "react"
import ReactDOM from "react-dom"

import { add } from "./math"

ReactDOM.render(
  <div>2 + 5 is {add(2,5)}</div>,
  document.getElementById('application-container')
);
