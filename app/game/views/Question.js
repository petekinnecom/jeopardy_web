import React, { Component } from "react"

export default class Question extends Component {
  render() {
    return (
      <div onClick={this.props.next}>
        {this.props.question}
      </div>
    )
  }
}
