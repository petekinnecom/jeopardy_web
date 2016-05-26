import React from "react"
import { mount } from "enzyme"

import ConnectedGame, { Game } from "../../app/game/Game"

import { START, CATEGORIES } from "../../app/game/states"

describe("game/Game", ()=>{
  let component

  describe("unit-ish", ()=>{
    beforeEach(()=>{
      component = mount(
        <Game
          state={CATEGORIES}
          categories={["category_1", "category_2"]}
        />
      )
    })

    it("renders the start link", ()=>{
      expect(component.text()).toEqual("category_1category_2")
    })

  })
})
