import React from "react"
import { mount } from "enzyme"

import ConnectedMenu, { Menu } from "../../app/main/Menu.js"
import { initializeStore } from "../../app/store"

import { START_MENU, GAME_LOADING, PLAYING_GAME } from "../../app/main/states"
import * as Api from "../../app/api/comms"

describe("main/Menu", ()=>{
  let component
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

  describe("ConnectedMenu", ()=>{
    let store
    let unsubscribe = () => {}

    beforeEach(()=>{
      store = initializeStore()
      spyOn(window, "fetch").and.returnValue()
    })

    afterEach(()=>{
      unsubscribe()
    })

    it("fetches a game when connected", ()=>{
      const dummyPromise = Promise.resolve({dummy: "data"})
      const spy = spyOn(Api, "fetchRandomGame").and.returnValue(dummyPromise)

      store = initializeStore({
        game: {
          completed: [1, 21]
        }
      })

      component = mount(
        <ConnectedMenu store={store} />
      )
      expect(spy).toHaveBeenCalledWith([1, 21])
    })

    it("starts a game when the link is clicked", (done)=>{
      const dummyPromise = Promise.resolve({dummy: "board"})
      spyOn(Api, "fetchRandomGame").and.returnValue(dummyPromise)

      store = initializeStore()

      component = mount(
        <ConnectedMenu store={store} />
      )

      let expectedStates = [GAME_LOADING, PLAYING_GAME]

      unsubscribe = store.subscribe(() => {
        expect(store.getState().main.display).toEqual(expectedStates.shift())
        if (expectedStates.length === 0) {
          expect(store.getState().game.board).toEqual({dummy: "board"})
          done()
        }
      });

      component.find("Link").simulate("click")
    })
  })
})
