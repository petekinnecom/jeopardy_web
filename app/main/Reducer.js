import { START_MENU, GAME_LOADING, PLAYING_GAME } from "./gameStates"
import { START_GAME, GAME_LOADED } from "./actions"

export const defaultState = {
  gameState: START_MENU
}

export default (state, action) => {
  if (!state) {
    return defaultState
  }

  switch(action.type) {
    case START_GAME:
      return {...state, gameState: GAME_LOADING}
    case GAME_LOADED:
      return {...state, gameState: PLAYING_GAME}
    default:
      state
  }
}
