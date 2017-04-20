import React, { Component } from "react"
import { connect } from "react-redux"

import Link from "../shared/Link"
import { startGame, reservesReady, loadFailed} from "./actions"
import * as Api from "../api/comms"

export class Menu extends Component {

  _startGame() {
    this.props.startGame(this.props.reservesPromise)
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
  let reservesPromise = Api.refillReserves(completedGames, state.game.reserves)

  return {
    errorText: state.main.errorText,
    reservesPromise: reservesPromise
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (reservesPromise) => {
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
