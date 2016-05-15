import Reducer from "../../app/main/Reducer"
import { START_MENU, LOADING } from "../../app/main/gameStates"
import { START_GAME } from "../../app/main/actions"

describe("main/Reducer", ()=> {
  it("defaults to START_MENU", ()=> {
    const newState = Reducer()
    expect(newState.gameState).toEqual(START_MENU)
  })

  it("switches to the LOADING screen when the game is started", ()=> {
    const state = {gameState: START_MENU}
    const action = {type: START_GAME}

    const newState = Reducer(state, action)

    expect(newState.gameState).toEqual(LOADING)
  })
})

