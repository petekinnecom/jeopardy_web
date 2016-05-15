import React, { Component } from "react"
import { connect } from "react-redux"

import ConnectedMenu from "./Menu"

export class App extends Component {

  render() {
    console.log(this.props.gameState)
    switch (this.props.gameState){
      case "START_MENU":
        return ( <ConnectedMenu /> )
      case "LOADING":
        return (<div>LOADING!</div>)
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
