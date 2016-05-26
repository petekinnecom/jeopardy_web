import React, {Component} from "react"
import {connect} from "react-redux"

import { DONE, CATEGORIES, QUESTION, ANSWER} from "./states"

export class Game extends Component {

  render() {
    switch (this.props.state) {
      case CATEGORIES:
        return (
          <ul onClick={this.props.next}>
            {this.props.categories.map((c)=>{return (<li>{c}</li>)})}
          </ul>
        )
      case QUESTION:
        return (
          <div onClick={this.props.next}>
            {this.props.question}
          </div>
        )
      case ANSWER:
        return (
          <div onClick={this.props.next}>
            {this.props.answer}
          </div>
        )
      case DONE:
        return (
          <div>Thanks for playing</div>
        )
      default:
        return (
          <div>unknown state: {this.props.state}</div>
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
    state: state.game.state,
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
