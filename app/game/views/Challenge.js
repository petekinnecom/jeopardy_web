import React, { Component } from "react"
import Layout from "./Layout"

export default class Challenge extends Component {

  render() {
    return (
      <Layout
        previous={this.props.previous}
        next={this.props.next}
        nextText={this.props.nextText}
        voiceText={this.props.voiceText}
        voiceEnabled={this.props.voiceEnabled}
        toggleVoice={this.props.toggleVoice}
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
