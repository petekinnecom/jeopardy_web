import React, { Component } from "react"
import { connect } from "react-redux"

import Link from "../shared/Link"
import { startGame, gameLoaded } from "./actions"

export class Menu extends Component {
  render() {
    return (
      <div>
        <Link onClick={this.props.startGame}>Start New Game</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {
      dispatch(startGame())
      fetch("/board.json.html")
        .then((response) => {
          return response.json()
        .then((board) => {
          dispatch(gameLoaded(board))
        })
        .catch((e)=>{console.log('noooooo', e)})
      })
    }
  }
}

const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default ConnectedMenu
