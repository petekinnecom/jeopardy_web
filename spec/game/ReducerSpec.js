import Reducer from "../../app/game/Reducer"
import { CATEGORIES } from "../../app/game/states"
import { GAME_LOADED } from "../../app/main/actions"

describe("game/Reducer", ()=> {
  it("defaults game to empty object", ()=> {
    const newState = Reducer()
    expect(newState).toEqual({})
  })

  it("Begins on the first round, category, challenge", ()=> {
    const state = {}
    const action = {
      type: GAME_LOADED,
      board: "boardData"
    }

    const newState = Reducer(state, action)
    expect(newState.state).toEqual(CATEGORIES)
    expect(newState.board).toEqual("boardData")
    expect(newState.player).toEqual({
      round: 0,
      category: 0,
      challenge: 0
    })
  })
})

