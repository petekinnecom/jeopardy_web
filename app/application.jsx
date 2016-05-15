import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import ConnectedMenu from "./main/Menu"

import { initializeStore } from "./store"

const store = initializeStore({text: "default text"})

ReactDOM.render(
  <Provider store={store}>
     <ConnectedMenu />
  </Provider>,
  document.getElementById("application-container")
);
