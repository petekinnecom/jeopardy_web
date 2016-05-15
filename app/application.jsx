import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import ConnectedMain from "./main/Main"

import { initializeStore } from "./store"

const store = initializeStore()

ReactDOM.render(
  <Provider store={store}>
     <ConnectedMain />
  </Provider>,
  document.getElementById("application-container")
);
