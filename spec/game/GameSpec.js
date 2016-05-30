import React from "react"
import { mount, shallow } from "enzyme"

import ConnectedGame, { Game } from "../../app/game/Game"

import { ANSWER, DONE, CATEGORIES, GAME_INFO, QUESTION } from "../../app/game/states"

describe("game/Game", ()=>{
  it("renders the Categories", ()=>{
    const component = shallow(
      <Game
        display={CATEGORIES}
        categories="categoriesStub"
        next="nextStub"
        previous="previousStub"
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
        answer="answerStub"
        question="questionStub"
        category="categoryStub"
        value="valueStub"
        next="nextStub"
        previous="previousStub"
      />
    )
    expect(component.find("Challenge").props().answer).toEqual(undefined)
    expect(component.find("Challenge").props()).toEqual({
      question: "questionStub",
      next: "nextStub",
      previous: "previousStub",
      nextText: "answer",
      category: "categoryStub",
      value: "valueStub",
    })
  })

  it("renders the Answer", ()=>{
    const component = shallow(
      <Game
        display={ANSWER}
        answer="answerStub"
        question="questionStub"
        category="categoryStub"
        value="valueStub"
        next="nextStub"
        previous="previousStub"
      />
    )
    expect(component.find("Challenge").props()).toEqual({
      answer: "answerStub",
      question: "questionStub",
      next: "nextStub",
      previous: "previousStub",
      nextText: "next",
      category: "categoryStub",
      value: "valueStub",
    })
  })

  it("renders Done", ()=>{
    const component = shallow(
      <Game
        display={DONE}
        previous="previousStub"
        finish="finishStub"
      />
    )
    expect(component.find("Done").props()).toEqual({
      previous: "previousStub",
      next: "finishStub"
    })
  })

  it("renders GameInfo", ()=>{
    const component = shallow(
      <Game
        display={GAME_INFO}
        next="nextStub"
        previous="previousStub"
        finish="finishStub"
        airDate="2014-01-31"
        showNumber="4038"
      />
    )
    expect(component.find("GameInfo").props()).toEqual({
      previous: null,
      next: "nextStub",
      airDate: "2014-01-31",
      showNumber: "4038"
    })

  })
})
