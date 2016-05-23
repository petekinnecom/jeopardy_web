import React from "react"
import { mount } from "enzyme"
import fetchMock from "fetch-mock"

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
    let unsubscribe = ()=>{}
    beforeEach(()=>{
      store = initializeStore()

      component = mount(
        <ConnectedMenu store={store} />
      )
    })

    afterEach(()=>{
      unsubscribe()
    })

    it("defaults to MENU state", ()=>{
      expect(store.getState().main.display).toEqual(START_MENU)
    })

    it("loads the game", (done)=>{

      let response = new window.Response('{"data": "dummy"}', {
        status: 200,
        headers: {
          "Content-type": "application/json"
        }
      })
      spyOn(window, "fetch").and.returnValue(Promise.resolve(response))

      let expectedStates = [GAME_LOADING, PLAYING_GAME]
      unsubscribe = store.subscribe(() => {
        expect(store.getState().main.display).toEqual(expectedStates.shift())
        if (expectedStates.length === 0) {
          done()
        }
      });
      component.find("Link").simulate("click")
    })
  })
})

