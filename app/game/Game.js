import React, { Component } from "react"
import { connect } from "react-redux"

import { START } from "./states"

export default class Game extends Component {

  render() {
    switch (this.props.gameState) {
      case START:
        return (<div>Round 1 Categories</div>)
      default:
        return (<div>unknown game state</div>)
    }
  }
}
