import React, { Component } from "react"
import { connect } from "react-redux"

import Link from "../shared/Link"
import { startGame, gameLoaded, loadFailed} from "./actions"
import * as Api from "../api/comms"

export class Menu extends Component {

  _startGame() {
    this.props.startGame(this.props.gamePromise)
  }

  render() {
    return (
      <div>
        {this.props.errorText && <div>{this.props.errorText}</div>}
        <Link onClick={this._startGame.bind(this)}>Start New Game</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let completedGames = state.game.completed
  let gamePromise = Api.fetchRandomGame(completedGames)

  return {
    errorText: state.main.errorText,
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
        .catch((e)=> {
          dispatch(loadFailed())
        })
    }
  }
}

const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default ConnectedMenu
