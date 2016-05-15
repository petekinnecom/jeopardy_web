import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import HelloSpan from "./HelloSpan.jsx"
import { initializeStore } from "./store"

const store = initializeStore({text: "default text"})

ReactDOM.render(
  <Provider store={store}>
     <HelloSpan />
  </Provider>,
  document.getElementById("application-container")
);
