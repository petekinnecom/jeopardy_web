import React from "react"
import { Provider } from "redux"
import { mount } from "enzyme"

import ConnectedMenu, { Menu } from "../../app/main/Menu.js"
import { initializeStore } from "../../app/store"

import { MENU, LOADING } from "../../app/main/gameStates"

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
      store = initializeStore({main: {gameState: MENU}})

      component = mount(
        <ConnectedMenu store={store} />
      )
    })

    it("starts the game", ()=>{
      component.find("Link").simulate("click")
      expect(store.getState().main.gameState).toEqual(LOADING)
    })

  })
})


// describe("Menu", ()=>{
//   var component
//
//   beforeEach(()=>{
//     let store = initializeStore({text: "Hello from redux"})
//
//     component = mount(
//       <HelloSpan store={store} />
//     )
//   })
//
//   it("says hello", ()=>{
//     expect(component.text()).toEqual("Hello from redux")
//   })
//
//   describe("integration spec", ()=>{
//     it("listens to click", ()=>{
//       component.simulate("click")
//       expect(component.text()).toEqual("updated by redux")
//     })
//   })
// })
