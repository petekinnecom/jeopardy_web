import React from "react"
import { mount, shallow } from "enzyme"

import ConnectedGame, { Game } from "../../app/game/Game"

import { ANSWER, DONE, CATEGORIES, QUESTION } from "../../app/game/states"

describe("game/Game", ()=>{
  let component
  beforeEach(()=>{

  })

  it("renders the Categories", ()=>{
    component = shallow(
      <Game
        display={CATEGORIES}
        categories={"categoriesStub"}
        next={"nextStub"}
      />
    )
    expect(component.find("Categories").props()).toEqual({
      categories: "categoriesStub",
      next: "nextStub"
    })
  })

  it("renders the Question", ()=>{
    component = shallow(
      <Game
        display={QUESTION}
        question={"questionStub"}
        next={"nextStub"}
      />
    )
    expect(component.find("Question").props()).toEqual({
      question: "questionStub",
      next: "nextStub"
    })
  })

  it("renders the Answer", ()=>{
    component = shallow(
      <Game
        display={ANSWER}
        answer={"answerStub"}
        next={"nextStub"}
      />
    )
    expect(component.find("Answer").props()).toEqual({
      answer: "answerStub",
      next: "nextStub"
    })
  })

  it("renders Done", ()=>{
    component = shallow(
      <Game
        display={DONE}
      />
    )
    expect(component.find("DONE")).toBeTruthy()
  })


})
