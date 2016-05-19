import React from "react"
import { Provider } from "react-redux"
import { mount, shallow } from "enzyme"

import ConnectedMain, { Main } from "../../app/main/Main"
import { initializeStore } from "../../app/store"

import { START_MENU, GAME_LOADING, PLAYING_GAME } from "../../app/main/states"

describe("main/Main", ()=>{
  let component

  describe("unit-ish", ()=>{
    it("renders the Menu", ()=>{
      component = shallow(
        <Main mainDisplay={START_MENU}/>
      )

      // Can't tell if this is a consequence of using connect
      // function or whether a side effect of shallow

      expect(component.find("Connect(Menu)").length).toEqual(1)
    })

    it("renders the Loading screen", ()=>{
      component = shallow(
        <Main mainDisplay={GAME_LOADING}/>
      )
      expect(component.find("Loading").length).toEqual(1)
    })

    it("renders the Game", ()=>{
      component = shallow(
        <Main mainDisplay={PLAYING_GAME} gameDisplay="dummyGameDisplay"/>
      )
      expect(component.find("Game").length).toEqual(1)
      expect(component.find("Game").props().display).toEqual("dummyGameDisplay")
    })

  })

  describe("integration-ish", ()=>{
    let store
    beforeEach(()=>{
      store = initializeStore()
      component = mount(
        <Provider store={store}>
          <ConnectedMain />
        </Provider>
      )
    })

    it("defaults to MENU state", ()=>{
      expect(component.find("Menu").length).toEqual(1)
    })

  })
})
