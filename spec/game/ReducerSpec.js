import Reducer from "../../app/game/Reducer"
import { START } from "../../app/game/states"
import { START_GAME } from "../../app/main/actions"

describe("game/Reducer", ()=> {
  it("defaults game to empty object", ()=> {
    const newState = Reducer()
    expect(newState).toEqual({})
  })

  it("sets state to START when the game has started", ()=> {
    const state = {}
    const action = {
      type: START_GAME,
      data: "game_data"
    }

    const newState = Reducer(state, action)
    expect(newState.state).toEqual(START)
    expect(newState.board).toEqual("game_data")
  })
})

