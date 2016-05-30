import { applyMiddleware, createStore } from "redux";
import createLogger from "redux-logger";

import mainReducer from "./main/Reducer"
import gameReducer from "./game/Reducer"
import voiceReducer from "./voice/Reducer"

const initializeReducer = (initialState = {}) => {
  return (state = initialState, action) => {
    return {
      main: mainReducer(state.main, action),
      game: gameReducer(state.game, action),
      voice: voiceReducer(state.voice, action)
    }
  }
}

export let initializeStore = (initialState) => {
  return createStore(
    initializeReducer(initialState),
    applyMiddleware(createLogger())
  )
}
