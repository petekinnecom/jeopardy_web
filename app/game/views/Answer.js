import React, { Component } from "react"
import Challenge from "./Challenge"

export default class Answer extends Component {
  render() {
    return (
      <Challenge
        category={this.props.category}
        value={this.props.value}
        question={this.props.question}
        answer={this.props.answer}
        next={this.props.next}
        nextText="next"
        previous={this.props.previous}
        voiceText={this.props.answer}
        speak={this.props.speak}
      />
    )
  }
}
