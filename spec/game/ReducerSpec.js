import Reducer from "../../app/game/Reducer"
import { ANSWER, CATEGORIES, DONE, QUESTION } from "../../app/game/states"
import { GAME_LOADED } from "../../app/main/actions"
import { next, previous } from "../../app/game/actions"

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
})

