import { ANSWER, CATEGORIES, DONE, QUESTION, GAME_INFO } from "./states"
import { RESERVES_READY } from "../main/actions"
import { NEXT, PREVIOUS, FINISH } from "../game/actions"

const initialState = {
  completed: [],
  reserves: [],
}

export default (state = initialState, action) => {
  if (!state) {
    return initialState
  }

  if (!action) {
    return state
  }

  switch (action.type) {
    case RESERVES_READY:
      return {
        ...state,
        board: action.boards[0], //TODO: don't mutate. just lazy here
        reserves: action.boards.slice(1, action.boards.length),
        player: {
          display: GAME_INFO,
          round: 0,
          category: 0,
          challenge: 0
        }
      }

    case NEXT:
      const player = nextPlayer(state)
      return {
        ...state,
        player: {
          ...player,
          history: state.player
        }
      }

    case PREVIOUS:
      return {
        ...state,
        player: state.player.history
      }

    case FINISH:
      return {
        ...state,
        player: null,
        board: null,
        completed: state.completed.concat([state.board.id])
      }

    default:
      return state
  }
}

function nextPlayer(state) {
  const currentRound = state.board.rounds[state.player.round]
  const currentCategory = currentRound.categories[state.player.category]

  if (state.player.display == GAME_INFO) {
    return {
      ...state.player,
      display: CATEGORIES
    }
  }

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
      challenge: state.player.challenge + 1
    }
  }
  if (state.player.category + 1 < currentRound.categories.length) {
    return {
      ...state.player,
      display: QUESTION,
      category: state.player.category + 1,
      challenge: 0
    }
  }

  if (state.player.round + 1 < state.board.rounds.length) {
    return {
      display: CATEGORIES,
      round: state.player.round + 1,
      category: 0,
      challenge: 0
    }
  }

  return {
    ...state.player,
    display: DONE,
  }
}
