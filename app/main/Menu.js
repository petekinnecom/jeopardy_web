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
      setTimeout(()=>{
        dispatch(gameLoaded({id: "game_id"}))
      }, 1000)
    }
  }
}

const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default ConnectedMenu
