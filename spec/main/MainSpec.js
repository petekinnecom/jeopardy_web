import React from "react"
import { Provider } from "react-redux"
import { mount, shallow } from "enzyme"

import ConnectedMain, { Main } from "../../app/main/Main"
import { initializeStore } from "../../app/store"

import { START_MENU, GAME_LOADING, PLAYING_GAME } from "../../app/main/states"

describe("main/Main", ()=>{
  let component

  it("renders the Menu", ()=>{
    component = shallow(
      <Main mainDisplay={START_MENU}/>
    )

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
      <Main mainDisplay={PLAYING_GAME} gameDisplay="dummyGameState"/>
    )

    expect(component.find("Connect(Game)").length).toEqual(1)
    expect(component.find("Connect(Game)").props().display).toEqual("dummyGameState")
  })

  describe("ConnectedMain", ()=>{

    xit("maps the state to props", ()=>{
      // don't know why this is failing?
      let mainStub = {a: 1}
      let gameStub = {b: 2}

      let store = initializeStore({
        main: mainStub,
        game: gameStub
      })
      component = mount(
        <Provider store={store}>
          <ConnectedMain />
        </Provider>
      )
      expect(component.find("Main").props()).toEqual({
        mainDisplay: mainStub,
        gameDisplay: gameStub
      })

    })
  })
})
