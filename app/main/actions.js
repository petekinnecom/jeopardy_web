export const START_GAME = "START_GAME"
export const RESERVES_READY = "RESERVES_READY"
export const LOAD_FAILED = "LOAD_FAILED"

export const reservesReady = (boards)=> {
  return {
    type: RESERVES_READY,
    boards: boards
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
