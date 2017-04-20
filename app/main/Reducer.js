import { START_MENU, GAME_LOADING, PLAYING_GAME } from "./states"
import { START_GAME, GAME_LOADED, LOAD_FAILED } from "./actions"
import { FINISH } from "../game/actions"

export const defaultState = {
  display: START_MENU,
  errorCount: 0
}

const errorMessages = [
  "Game download failed. Try again!  Believe in yourself!",
  "Failed again. Check your connection. SORRY. :|",
  "Failed to download game. Possibly there is something wrong. Possibly. Try again."
]

export default (state, action) => {
  if (!state) {
    return defaultState
  }

  switch(action.type) {
    case START_GAME:
      return {...state, display: GAME_LOADING, errorText: ""}
    case GAME_LOADED:
      return {...state, display: PLAYING_GAME}
    case LOAD_FAILED:
      return {...state, display: START_MENU, errorText: errorMessages[state.errorCount % errorMessages.length], errorCount: state.errorCount + 1}
    case FINISH:
      return {...state, display: START_MENU}
    default:
      return state
  }
}
