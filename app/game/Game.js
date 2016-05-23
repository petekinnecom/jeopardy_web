import React, { Component } from "react"
import { connect } from "react-redux"
import Board from "./board"

import { START } from "./states"

class Game extends Component {

  render() {
    switch (this.props.display) {
      case START:
        return <Board next={() => {}} />
      default:
        return (<div>unknown game state</div>)
    }
  }
}

export default connect()(Game)
