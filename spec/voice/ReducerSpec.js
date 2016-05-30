import Reducer from "../../app/voice/Reducer"

import { TOGGLE } from "../../app/voice/actions"

describe("voice/Reducer", ()=> {
  it("defaults to enabled", ()=> {
    const newState = Reducer()
    expect(newState.enabled).toEqual(true)
  })

  it("disables the voice", ()=>{
    const state = {
      enabled: true
    }
    const action = {
      type: TOGGLE
    }

    const newState = Reducer(state, action)

    expect(newState.enabled).toEqual(false)
  })

  it("enables the voice", ()=> {
    const state = {
      enabled: false
    }
    const action = {
      type: TOGGLE
    }

    const newState = Reducer(state, action)

    expect(newState.enabled).toEqual(true)
  })
})

