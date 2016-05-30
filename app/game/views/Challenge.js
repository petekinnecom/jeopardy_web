import React, { Component } from "react"
import Layout from "./Layout"
import { speak } from "../../voice/Voice"

export default class Challenge extends Component {

  _speakText() {
    speak(this.props.voiceText)
  }

  componentDidMount() {
    speak(this.props.voiceText)
  }

  render() {
    return (
      <Layout
        previous={this.props.previous}
        next={this.props.next}
        nextText={this.props.nextText}
        onBodyClick={this._speakText.bind(this)}
      >
        <div className="challenge-value">
          {this.props.value}
        </div>

        <div className="challenge-category">
          {this.props.category}
        </div>

        <div className="challenge-question">
          {this.props.question}
        </div>

        <div className="challenge-answer">
          {this.props.answer}
        </div>
      </Layout>
    )
  }
}
