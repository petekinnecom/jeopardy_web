import {CATEGORIES} from "./states"
import {GAME_LOADED} from "../main/actions"

export default (state = {}, action) => {
  if (!action) {
    return state
  }

  switch (action.type) {
    case GAME_LOADED:
      return {
        state: CATEGORIES,
        board: action.board,
        player: {
          round: 0,
          category: 0,
          challenge: 0,
        }
      }

    case "NEXT":
      const currentRound = state.board.rounds[state.player.round]
      const currentCategory = currentRound.categories[state.player.category]

      if (state.state == CATEGORIES) {
        return {
          ...state,
          state: "QUESTION"
        }
      }

      if (state.player.challenge + 1 < currentCategory.challenges.length) {
        return {
          ...state,
          state: "QUESTION",
          player: {
            ...state.player,
            challenge: state.player.challenge + 1,
          }
        }
      }
      if (state.player.category + 1 < currentRound.categories.length) {
        return {
          ...state,
          state: "QUESTION",
          player: {
            ...state.player,
            category: state.player.category + 1,
            challenge: 0,
          }
        }
      }

      return {
        ...state,
        state: "CATEGORIES",
        player: {
          round: state.player.round + 1,
          category: 0,
          challenge: 0,
        }
      }



    default:
      return state
  }
}
