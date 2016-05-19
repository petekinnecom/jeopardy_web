import React from "react"
import { mount } from "enzyme"

import ConnectedMenu, { Menu } from "../../app/main/Menu.js"
import { initializeStore } from "../../app/store"

import { START_MENU, GAME_LOADING, PLAYING_GAME } from "../../app/main/states"

describe("main/Menu", ()=>{
  let component

  describe("unit-ish", ()=>{
    let startGameSpy

    beforeEach(()=>{

      startGameSpy = jasmine.createSpy()
      component = mount(
        <Menu startGame={startGameSpy}/>
      )
    })

    it("renders the start link", ()=>{
      expect(component.find("Link").text()).toEqual("Start New Game")
    })

    it("triggers a game start", ()=>{
      component.find("Link").simulate("click")
      expect(startGameSpy).toHaveBeenCalled()
    })
  })

  describe("integration-ish", ()=>{
    let store
    beforeEach(()=>{
      store = initializeStore()

      component = mount(
        <ConnectedMenu store={store} />
      )
    })

    it("defaults to MENU state", ()=>{
      expect(store.getState().main.display).toEqual(START_MENU)
    })

    it("starts the game", (done)=>{
      component.find("Link").simulate("click")
      expect(store.getState().main.display).toEqual(GAME_LOADING)

      setTimeout(()=>{
        expect(store.getState().main.display).toEqual(PLAYING_GAME)
        done()
      }, 1100)
    })

  })
})
