import { ANSWER, CATEGORIES, DONE, QUESTION } from "./states"
import { GAME_LOADED } from "../main/actions"
import { NEXT } from "../game/actions"

export default (state = {}, action) => {
  if (!action) {
    return state
  }

  switch (action.type) {
    case GAME_LOADED:
      return {
        display: CATEGORIES,
        board: action.board,
        player: {
          round: 0,
          category: 0,
          challenge: 0,
        }
      }

    case NEXT:
      const currentRound = state.board.rounds[state.player.round]
      const currentCategory = currentRound.categories[state.player.category]

      if (state.display == CATEGORIES) {
        return {
          ...state,
          display: QUESTION
        }
      }

      if (state.display == QUESTION) {
        return {
          ...state,
          display: ANSWER
        }
      }

      if (state.player.challenge + 1 < currentCategory.challenges.length) {
        return {
          ...state,
          display: QUESTION,
          player: {
            ...state.player,
            challenge: state.player.challenge + 1,
          }
        }
      }
      if (state.player.category + 1 < currentRound.categories.length) {
        return {
          ...state,
          display: QUESTION,
          player: {
            ...state.player,
            category: state.player.category + 1,
            challenge: 0,
          }
        }
      }

      if (state.player.round + 1 < state.board.rounds.length) {
        return {
          ...state,
          display: CATEGORIES,
          player: {
            round: state.player.round + 1,
            category: 0,
            challenge: 0,
          }
        }
      }

      return {
        ...state,
        display: DONE
      }

    default:
      return state
  }
}
