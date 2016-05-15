import React from "react"
import ReactTestUtils from "react/lib/ReactTestUtils"
import HelloSpan from "../app/HelloSpan.jsx"
import { mount } from "enzyme"

describe('HelloSpan', ()=>{
  let TestUtils = ReactTestUtils
  var component

  beforeEach(()=>{
    component = TestUtils.renderIntoDocument(
      <HelloSpan />
    )
  })

  it('says hello', ()=>{
    let span = mount(<HelloSpan />)
    expect(span.text()).toEqual("Hello from HelloSpan")
  })
})
