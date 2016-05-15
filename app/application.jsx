import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { createStore } from "redux"

import { add } from "./math"
import HelloSpan from "./HelloSpan.jsx"

let reducer = (state={text: "hello from redux"}, action) => {
  return state
}

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
     <HelloSpan />
  </Provider>,
  document.getElementById("application-container")
);
