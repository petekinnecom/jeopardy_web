import React from "react"
import { Provider } from "react-redux"
import { mount, shallow } from "enzyme"

import ConnectedMain, { Main } from "../../app/main/Main"
import { initializeStore } from "../../app/store"

import { START_MENU, GAME_LOADING } from "../../app/main/states"

describe("main/Main", ()=>{
  let component

  describe("unit-ish", ()=>{
    it("renders the Menu", ()=>{
      component = shallow(
        <Main mainState={START_MENU}/>
      )

      // Can't tell if this is a consequence of using connect
      // function or whether a side effect of shallow

      expect(component.find("Connect(Menu)").length).toEqual(1)
    })

    it("renders the Loading screen", ()=>{
      component = shallow(
        <Main mainState={GAME_LOADING}/>
      )
      expect(component.find("Loading").length).toEqual(1)
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
