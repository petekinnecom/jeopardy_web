import React from "react"
import { mount, shallow } from "enzyme"

import ConnectedGame, { Game } from "../../app/game/Game"

import { ANSWER, DONE, CATEGORIES, QUESTION } from "../../app/game/states"

describe("game/Game", ()=>{
  it("renders the Categories", ()=>{
    const component = shallow(
      <Game
        display={CATEGORIES}
        categories={"categoriesStub"}
        next={"nextStub"}
        previous={"previousStub"}
      />
    )
    expect(component.find("Categories").props()).toEqual({
      categories: "categoriesStub",
      next: "nextStub",
      previous: "previousStub"
    })
  })

  it("renders the Question", ()=>{
    const component = shallow(
      <Game
        display={QUESTION}
        question={"questionStub"}
        next={"nextStub"}
        previous={"previousStub"}
      />
    )
    expect(component.find("Question").props()).toEqual({
      question: "questionStub",
      next: "nextStub",
      previous: "previousStub"
    })
  })

  it("renders the Answer", ()=>{
    const component = shallow(
      <Game
        display={ANSWER}
        answer={"answerStub"}
        next={"nextStub"}
        previous={"previousStub"}
      />
    )
    expect(component.find("Answer").props()).toEqual({
      answer: "answerStub",
      next: "nextStub",
      previous: "previousStub"
    })
  })

  it("renders Done", ()=>{
    const component = shallow(
      <Game
        display={DONE}
        previous={"previousStub"}
      />
    )
    expect(component.find("Done").props()).toEqual({
      previous: "previousStub"
    })
  })
})
