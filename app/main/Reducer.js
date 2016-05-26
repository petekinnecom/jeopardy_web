import { START_MENU, GAME_LOADING, PLAYING_GAME } from "./states"
import { START_GAME, GAME_LOADED } from "./actions"

export const defaultState = {
  state: START_MENU
}

export default (state, action) => {
  if (!state) {
    return defaultState
  }

  switch(action.type) {
    case START_GAME:
      return {...state, state: GAME_LOADING}
    case GAME_LOADED:
      return {...state, state: PLAYING_GAME}
    default:
      return state
  }
}
