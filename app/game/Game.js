import React, {Component} from "react"
import {connect} from "react-redux"

import { DONE, CATEGORIES, QUESTION, ANSWER} from "./states"

import Categories from "./views/Categories"
import Question from "./views/Question"
import Answer from "./views/Answer"
import Done from "./views/Done"

export class Game extends Component {

  render() {
    switch (this.props.display) {
      case CATEGORIES:
        return (
          <Categories
            categories={this.props.categories}
            next={this.props.next}
          />
        )
      case QUESTION:
        return (
          <Question
            question={this.props.question}
            next={this.props.next}
          />
        )
      case ANSWER:
        return (
          <Answer
            answer={this.props.answer}
            next={this.props.next}
          />
        )
      case DONE:
        return (
          <Done />
        )
      default:
        return (
          <div>unknown display: {this.props.display}</div>
        )
    }
  }
}

const mapStateToProps = (state) => {
  const currentState = state.game.player

  const round = state.game.board.rounds[currentState.round]
  const category = round.categories[currentState.category]
  const challenge = category.challenges[currentState.challenge]
  const categoryNames = round.categories.map((c) => {
      return c.name
    })

  return {
    display: state.game.player.display,
    categories: categoryNames,
    roundName: round.name,
    category: category.name,
    question: challenge.question,
    answer: challenge.answer,
    value: challenge.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    next: () => {dispatch({type: "NEXT"}) }
  }
}

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game)
export default ConnectedGame
