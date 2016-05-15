import { START_MENU, LOADING } from "./gameStates"
import { START_GAME } from "./actions"

export const defaultState = {
  gameState: START_MENU
}

export default (state, action) => {
  if (!state) {
    return defaultState
  }

  if (action.type === START_GAME) {
    return {...state, gameState: LOADING}
  }
}
