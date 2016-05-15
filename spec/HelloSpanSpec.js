import React from "react"
import { createStore, Provider } from "redux"
import HelloSpan from "../app/HelloSpan.jsx"
import { mount } from "enzyme"

describe('HelloSpan', ()=>{
  var component

  beforeEach(()=>{
    let reducer = (state={text: "Hello from redux"}, action) => {
      return state
    }

    let store = createStore(reducer)

    component = mount(
      <HelloSpan store={store} />
    )
  })

  it('says hello', ()=>{
    expect(component.text()).toEqual("Hello from redux")
  })
})
