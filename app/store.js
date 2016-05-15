import { createStore } from "redux"

import mainReducer from "./main/Reducer"

const initializeReducer = (initialState) => {
  
  return (state=initialState, action) => {
    return {
      main: mainReducer(state, action)
    }
  }
}

export let initializeStore = (initialState) => {
  return createStore(initializeReducer(initialState))
}
