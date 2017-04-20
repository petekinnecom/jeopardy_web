export const START_GAME = "START_GAME"
export const GAME_LOADED = "GAME_LOADED"
export const LOAD_FAILED = "LOAD_FAILED"

export const gameLoaded = (board)=> {
  return {
    type: GAME_LOADED,
    board: board
  }
}

export const startGame = ()=> {
  return {
    type: START_GAME
  }
}

export const loadFailed = ()=> {
  return {
    type: LOAD_FAILED
  }
}
