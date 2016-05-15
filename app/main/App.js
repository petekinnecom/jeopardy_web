import React, { Component } from "react"
import { connect } from "react-redux"

import ConnectedMenu from "./Menu"
import Loading from "../shared/Loading"
import { START_MENU, GAME_LOADING, PLAYING_GAME } from "./gameStates"

export class App extends Component {

  render() {
    switch (this.props.gameState){
      case START_MENU:
        return ( <ConnectedMenu /> )
      case GAME_LOADING:
        return (<Loading />)
      case PLAYING_GAME:
        return (<div>PLAYING_GAME</div>)
      default:
        return (<div>unknown state :(</div>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    gameState: state.main.gameState
  }
}

export default connect(mapStateToProps)(App)
