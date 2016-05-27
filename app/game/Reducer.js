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
        board: action.board,
        player: {
          display: CATEGORIES,
          round: 0,
          category: 0,
          challenge: 0,
        },
      }

    case NEXT:
      const player = nextPlayer(state)
      return {
        ...state,
        player: {
          ...player,
          history: state.player,
        },
      }
    default:
      return state
  }
}

function nextPlayer(state) {
  const currentRound = state.board.rounds[state.player.round]
  const currentCategory = currentRound.categories[state.player.category]

  if (state.player.display == CATEGORIES) {
    return {
      ...state.player,
      display: QUESTION
    }
  }

  if (state.player.display == QUESTION) {
    return {
      ...state.player,
      display: ANSWER
    }
  }

  if (state.player.challenge + 1 < currentCategory.challenges.length) {
    return {
      ...state.player,
      display: QUESTION,
      challenge: state.player.challenge + 1,
    }
  }
  if (state.player.category + 1 < currentRound.categories.length) {
    return {
      ...state.player,
      display: QUESTION,
      category: state.player.category + 1,
      challenge: 0,
    }
  }

  if (state.player.round + 1 < state.board.rounds.length) {
    return {
      display: CATEGORIES,
      round: state.player.round + 1,
      category: 0,
      challenge: 0,
    }
  }

  return {
    ...state.player,
    display: DONE,
  }
}
