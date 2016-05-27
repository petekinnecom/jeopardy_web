import React, { Component } from "react"

export default class Answer extends Component {
  render() {
    return (
      <div onClick={this.props.next}>
        {this.props.answer}
      </div>
    )
  }
}
