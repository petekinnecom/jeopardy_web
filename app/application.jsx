import React from "react"
import ReactDOM from "react-dom"

import { add } from "./math"
import HelloSpan from "./HelloSpan.jsx"

ReactDOM.render(
  <div>
    <div>2 + 5 is {add(2,5)}</div>
    <HelloSpan />
  </div>,
  document.getElementById('application-container')
);
