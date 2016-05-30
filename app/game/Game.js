import React, { Component } from "react"
import { connect } from "react-redux"

import { DONE, CATEGORIES, QUESTION, ANSWER, GAME_INFO } from "./states"
import { next, previous, finish } from "./actions"

import Categories from "./views/Categories"
import Done from "./views/Done"
import Challenge from "./views/Challenge"
import GameInfo from "./views/GameInfo"

export class Game extends Component {

  render() {
    switch (this.props.display) {
      case GAME_INFO:
        return (
          <GameInfo
            previous={null}
            next={this.props.next}
            airDate={this.props.airDate}
            showNumber={this.props.showNumber}
          />
        )
      case CATEGORIES:
        return (
          <Categories
            categories={this.props.categories}
            next={this.props.next}
            previous={this.props.previous}
          />
        )
      case QUESTION:
        return (
          <Challenge
            category={this.props.category}
            value={this.props.value}
            question={this.props.question}
            next={this.props.next}
            nextText="answer"
            previous={this.props.previous}
          />
        )
      case ANSWER:
        return (
          <Challenge
            category={this.props.category}
            value={this.props.value}
            question={this.props.question}
            answer={this.props.answer}
            next={this.props.next}
            nextText="next"
            previous={this.props.previous}
          />
        )
      case DONE:
        return (
          <Done
            previous={this.props.previous}
            next={this.props.finish}
          />
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
    value: challenge.value,
    airDate: state.game.board.airDate,
    showNumber: state.game.board.showNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    next: () => {
      dispatch(next())
    },
    previous: ()=> {
      dispatch(previous())
    },
    finish: () => {
      dispatch(finish())
    }
  }
}

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game)
export default ConnectedGame
