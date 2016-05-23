import React, { Component } from "react"
import { connect } from "react-redux"
import Board from "./board"
import {nextButtonPressed} from "./actions"

import { START } from "./states"

class Game extends Component {

  render() {
    switch (this.props.display) {
      case START:
        return <Board next={this.props.nextButtonPressed} />
      default:
        return (<div>unknown game state</div>)
    }
  }
}

export default connect(null, {nextButtonPressed})(Game)
