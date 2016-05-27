import React, { Component } from "react"
import { connect, createStore } from "react-redux"

import ConnectedMenu from "./Menu"
import ConnectedGame from "../game/Game"
import Loading from "../shared/Loading"
import { START_MENU, GAME_LOADING, PLAYING_GAME } from "./states"

export class Main extends Component {

  render() {
    switch (this.props.mainDisplay){
      case START_MENU:
        return ( <ConnectedMenu /> )
      case GAME_LOADING:
        return (<Loading />)
      case PLAYING_GAME:
        return (<ConnectedGame display={this.props.gameDisplay} />)
      default:
        return (<div>unknown state :(</div>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    mainDisplay: state.main.display,
    gameDisplay: state.game.display,
  }
}

export default connect(mapStateToProps)(Main)
