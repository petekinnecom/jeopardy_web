import Reducer from "../../app/game/Reducer"
import { ANSWER, CATEGORIES, DONE, QUESTION } from "../../app/game/states"
import { GAME_LOADED } from "../../app/main/actions"
import { next, previous, finish} from "../../app/game/actions"

import { boardFixture } from "../../app/fixtures/normalizedBoard"

describe("game/Reducer", ()=> {
  it("defaults to a good starting point", ()=> {
    const newState = Reducer()
    expect(newState).toEqual({
      completed: []
    })
  })

  it("Begins on the first round, category, challenge", ()=> {
    const state = {
      existingState: "stub"
    }
    const action = {
      type: GAME_LOADED,
      board: "boardData"
    }

    const newState = Reducer(state, action)
    expect(newState.existingState).toEqual("stub")
    expect(newState.board).toEqual("boardData")
    expect(newState.player).toEqual({
      display: CATEGORIES,
      round: 0,
      category: 0,
      challenge: 0,
    })
  })

  describe("NEXT action", ()=> {
    it("moves to the first question after displaying the categories", ()=>{
      const player = {
          display: CATEGORIES,
          round: 0,
          category: 0,
          challenge: 0,
        }

      const state = {
        board: boardFixture,
        player: player,
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.player).toEqual({
        display: QUESTION,
        round: 0,
        category: 0,
        challenge: 0,
        history: player,
      })
    })

    it("moves to the answer after displaying the question", ()=> {
      const player = {
          display: QUESTION,
          round: 0,
          category: 0,
          challenge: 0,
        }

      const state = {
        board: boardFixture,
        player: player,
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.player).toEqual({
        display: ANSWER,
        round: 0,
        category: 0,
        challenge: 0,
        history: player,
      })
    })

    it("moves to the next challenge after displaying the answer", ()=> {
      const player = {
          display: ANSWER,
          round: 0,
          category: 0,
          challenge: 0,
        }

      const state = {
        board: boardFixture,
        player: player,
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.player).toEqual({
        display: QUESTION,
        round: 0,
        category: 0,
        challenge: 1,
        history: player,
      })
    })

    it("moves to the next category when needed", ()=> {
      const player = {
          display: ANSWER,
          round: 0,
          category: 0,
          challenge: 4,
        }

      const state = {
        board: boardFixture,
        player: player,
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.player).toEqual({
        display: QUESTION,
        round: 0,
        category: 1,
        challenge: 0,
        history: player,
      })
    })

    it("displays the next round's categories before starting the round", ()=> {
      const player = {
          display: ANSWER,
          round: 0,
          category: 5,
          challenge: 4,
        }

      const state = {
        board: boardFixture,
        player: player,
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.player).toEqual({
        display: CATEGORIES,
        round: 1,
        category: 0,
        challenge: 0,
        history: player,
      })
    })

    it("moves to the next round when needed", ()=> {
      const player = {
          display: ANSWER,
          round: 0,
          category: 5,
          challenge: 4,
        }

      const state = {
        board: boardFixture,
        player: player,
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.player).toEqual({
        display: CATEGORIES,
        round: 1,
        category: 0,
        challenge: 0,
        history: player,
      })
    })

    it("ends the game when needed", ()=> {
      const player = {
          display: ANSWER,
          round: 2,
          category: 0,
          challenge: 0,
        }

      const state = {
        board: boardFixture,
        player: player,
      }
      const action = next()
      const newState = Reducer(state, action)
      expect(newState.player.display).toEqual(DONE)
    })
  })

  describe("PREVOUS action", () => {
    it("reverts to the players history record", ()=> {
      const player = {
        display: QUESTION,
        round: 0,
        category: 0,
        challenge: 0,
        history: "historyStub"
      }

      const state = {
        board: boardFixture,
        player: player,
      }
      const action = previous()
      const newState = Reducer(state, action)

      expect(newState.player).toEqual("historyStub")
    })
  })

  describe("FINISH action", () => {
    it("stores the game in the completed set", ()=>{
      const player = {
        display: DONE,
        round: 2,
        category: 0,
        challenge: 0,
      }

      const state = {
        board: boardFixture,
        player: player,
        completed: [13, 27]
      }
      const action = finish()
      const newState = Reducer(state, action)
      expect(newState.completed).toEqual([13, 27, 22])

    })
  })
})

