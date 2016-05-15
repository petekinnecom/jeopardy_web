import React from "react"
import { Provider } from "redux"
import { mount } from "enzyme"

import HelloSpan from "../app/HelloSpan.jsx"
import { initializeStore } from "../app/store"

describe('HelloSpan', ()=>{
  var component

  beforeEach(()=>{
    let store = initializeStore({text: "Hello from redux"})

    component = mount(
      <HelloSpan store={store} />
    )
  })

  it('says hello', ()=>{
    expect(component.text()).toEqual("Hello from redux")
  })

  describe('integration spec', ()=>{
    it('listens to click', ()=>{
      component.simulate('click')
      expect(component.text()).toEqual("updated by redux")
    })
  })
})
