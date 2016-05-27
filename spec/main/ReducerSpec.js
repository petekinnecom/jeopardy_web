import Reducer from "../../app/main/Reducer"
import { START_MENU, GAME_LOADING, PLAYING_GAME } from "../../app/main/states"
import { START_GAME, GAME_LOADED } from "../../app/main/actions"

describe("main/Reducer", ()=> {
  it("defaults to START_MENU", ()=> {
    const newState = Reducer()
    expect(newState.display).toEqual(START_MENU)
  })

  it("switches to the GAME_LOADING screen when the game is started", ()=> {
    const state = {display: START_MENU}
    const action = {type: START_GAME}

    const newState = Reducer(state, action)

    expect(newState.display).toEqual(GAME_LOADING)
  })

  it("switches to the PLAYING_GAME state when the game is loaded", ()=> {
    const state = {display: GAME_LOADING}
    const action = {type: GAME_LOADED}

    const newState = Reducer(state, action)

    expect(newState.display).toEqual(PLAYING_GAME)
  })

  it("returns state for other actions", () => {
    const state = {display: "stub"}
    const action = {type: "UNKNOWN"}

    const newState = Reducer(state, action)

    expect(newState).toEqual(state)
  })

})

