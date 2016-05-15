import React from "react"
import { Provider } from "react-redux"
import { mount, shallow } from "enzyme"

import ConnectedApp, { App } from "../../app/main/App"
import { initializeStore } from "../../app/store"

import { START_MENU, GAME_LOADING } from "../../app/main/gameStates"

describe("main/App", ()=>{
  let component

  describe("unit-ish", ()=>{
    it("renders the Menu", ()=>{
      component = shallow(
        <App gameState={START_MENU}/>
      )

      // Can't tell if this is a consequence of using connect
      // function or whether a side effect of shallow

      expect(component.find("Connect(Menu)").length).toEqual(1)
    })

    it("renders the Loading screen", ()=>{
      component = shallow(
        <App gameState={GAME_LOADING}/>
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
          <ConnectedApp />
        </Provider>
      )
    })

    it("defaults to MENU state", ()=>{
      expect(component.find("Menu").length).toEqual(1)
    })
  })
})
