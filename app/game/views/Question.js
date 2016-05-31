import React, { Component } from "react"
import Challenge from "./Challenge"

export default class Question extends Component {
  _strip(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText;
  }

  _questionText() {
    return this._strip(this.props.question)
  }

  render() {

    return (
      <Challenge
        category={this.props.category}
        value={this.props.value}
        question={this.props.question}
        next={this.props.next}
        nextText="answer"
        previous={this.props.previous}
        voiceText={ `${this.props.category}. ${this.props.value}. ${this._questionText()}`}
        speak={this.props.speak}
        toggleVoice={this.props.toggleVoice}
        voiceEnabled={this.props.voiceEnabled}
      />
    )
  }
}
