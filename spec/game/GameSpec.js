import React from "react"
import { mount } from "enzyme"

import Game from "../../app/game/Game"

import { START } from "../../app/game/states"

describe("game/Game", ()=>{
  let component

  describe("unit-ish", ()=>{
    beforeEach(()=>{
      component = mount(
        <Game gameState={START}/>
      )
    })

    it("renders the start link", ()=>{
      expect(component.text()).toEqual("Round 1 Categories")
    })

  })
})
