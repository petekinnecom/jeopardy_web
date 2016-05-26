import React, { Component } from "react"
import { connect } from "react-redux"

import Link from "../shared/Link"
import { startGame, gameLoaded } from "./actions"
import { json } from "../fixtures/normalizedBoard"

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
        dispatch(gameLoaded(json))
      }, 1)
    }
  }
}

const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)
export default ConnectedMenu
