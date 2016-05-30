import React, { Component } from "react"
import Challenge from "./Challenge"

export default class Question extends Component {
  render() {
    return (
      <Challenge
        category={this.props.category}
        value={this.props.value}
        question={this.props.question}
        next={this.props.next}
        nextText="answer"
        previous={this.props.previous}
        voiceText={ `${this.props.category}. ${this.props.value}. ${this.props.question}`}
        speak={this.props.speak}
      />
    )
  }
}
