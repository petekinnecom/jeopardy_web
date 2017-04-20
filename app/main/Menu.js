import React, { Component } from "react"
import { connect } from "react-redux"

import Link from "../shared/Link"
import { startGame, reservesReady, loadFailed} from "./actions"
import * as Api from "../api/comms"

export class Menu extends Component {

  _startGame() {
    this.props.startGame(this.props.completedGames, this.props.reserves)
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

  return {
    errorText: state.main.errorText,
    completedGames: state.game.completed,
    reserves: state.game.reserves
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (completedGames, reserves) => {
      let reservesPromise = Api.refillReserves(completedGames, reserves)

      dispatch(startGame())
      reservesPromise
        .then((boards) => {
          dispatch(reservesReady(boards))
        })
        .catch((e)=> {
          dispatch(loadFailed())
        })
    }
  }
}

const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default ConnectedMenu
