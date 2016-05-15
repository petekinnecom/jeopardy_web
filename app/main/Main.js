import React, { Component } from "react"
import { connect } from "react-redux"

import ConnectedMenu from "./Menu"
import Loading from "../shared/Loading"
import { START_MENU, GAME_LOADING, PLAYING_GAME } from "./states"

export class Main extends Component {

  render() {
    switch (this.props.mainState){
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
    mainState: state.main.state
  }
}

export default connect(mapStateToProps)(Main)
