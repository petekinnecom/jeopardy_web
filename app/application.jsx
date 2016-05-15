import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import ConnectedApp from "./main/App"

import { initializeStore } from "./store"

const store = initializeStore()

ReactDOM.render(
  <Provider store={store}>
     <ConnectedApp />
  </Provider>,
  document.getElementById("application-container")
);
