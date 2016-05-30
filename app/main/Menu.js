import React, { Component } from "react"
import { connect } from "react-redux"

import Link from "../shared/Link"
import { startGame, gameLoaded } from "./actions"
import * as Api from "../api/comms"

export class Menu extends Component {

  _startGame() {
    this.props.startGame(this.props.gamePromise)
  }

  render() {
    return (
      <div>
        <Link onClick={this._startGame.bind(this)}>Start New Game</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let completedGames = state.game.completed
  let gamePromise = Api.fetchRandomGame(completedGames)

  return {
    gamePromise: gamePromise
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (gamePromise) => {
      dispatch(startGame())
      gamePromise
        .then((board) => {
          dispatch(gameLoaded(board))
        })
        // .catch((e)=> {window.alert(e)})
    }
  }
}

const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default ConnectedMenu
