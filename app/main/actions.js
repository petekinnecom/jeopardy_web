export const START_GAME = "START_GAME"
export const GAME_LOADED = "GAME_LOADED"

export const gameLoaded = (gameData)=> {
  return {
    type: GAME_LOADED,
    gameData: gameData
  }  
}

export const startGame = ()=> {
  return {
    type: START_GAME
  }
}
