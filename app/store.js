import { createStore } from "redux"

const initializeReducer = (initialState) => {
  return (state=initialState, action) => {

    if (action.type === "UPDATE_TEXT") {
      return {...state, text: "updated by redux"}
    }

    return {...state}
  }
}

export let initializeStore = (initialState) => {
  return createStore(initializeReducer(initialState))
}
