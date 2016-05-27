import Reducer from "../../app/game/Reducer"
import { ANSWER, CATEGORIES, DONE, QUESTION } from "../../app/game/states"
import { GAME_LOADED } from "../../app/main/actions"
import { next } from "../../app/game/actions"

import { boardFixture } from "../../app/fixtures/normalizedBoard"

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
    expect(newState.display).toEqual(CATEGORIES)
    expect(newState.board).toEqual("boardData")
    expect(newState.player).toEqual({
      round: 0,
      category: 0,
      challenge: 0
    })
  })

  describe("NEXT action", ()=> {
    it("moves to the answer after displaying the question", ()=> {
      const state = {
        display: QUESTION,
        board: boardFixture,
        player: {
          round: 0,
          category: 0,
          challenge: 0,
        }
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.display).toEqual(ANSWER)
      expect(newState.player).toEqual({
        round: 0,
        category: 0,
        challenge: 0
      })
    })

    it("moves to the next challenge after displaying the answer", ()=> {
      const state = {
        display: ANSWER,
        board: boardFixture,
        player: {
          round: 0,
          category: 0,
          challenge: 0,
        }
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.display).toEqual(QUESTION)
      expect(newState.player).toEqual({
        round: 0,
        category: 0,
        challenge: 1
      })
    })

    it("moves to the next category when needed", ()=> {
      const state = {
        display: ANSWER,
        board: boardFixture,
        player: {
          round: 0,
          category: 0,
          challenge: 4,
        }
      }
      const action = next()
      const newState = Reducer(state, action)


      expect(newState.display).toEqual(QUESTION)
      expect(newState.player).toEqual({
        round: 0,
        category: 1,
        challenge: 0
      })
    })

    it("displays the next round's categories before starting the round", ()=> {
      const state = {
        display: ANSWER,
        board: boardFixture,
        player: {
          round: 0,
          category: 5,
          challenge: 4,
        }
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.display).toEqual(CATEGORIES)
      expect(newState.player).toEqual({
        round: 1,
        category: 0,
        challenge: 0
      })
    })

    it("moves to the next round when needed", ()=> {
      const state = {
        display: ANSWER,
        board: boardFixture,
        player: {
          round: 0,
          category: 5,
          challenge: 4,
        }
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.display).toEqual(CATEGORIES)
      expect(newState.player).toEqual({
        round: 1,
        category: 0,
        challenge: 0
      })
    })

    it("ends the game when needed", ()=> {
      const state = {
        display: ANSWER,
        board: boardFixture,
        player: {
          round: 2,
          category: 0,
          challenge: 0,
        }
      }
      const action = next()
      const newState = Reducer(state, action)

      expect(newState.display).toEqual(DONE)
    })
  })
})

