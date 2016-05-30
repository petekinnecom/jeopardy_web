import React, { Component } from "react"
import Layout from "./Layout"

export default class GameInfo extends Component {
  render() {
    
    const voiceText = `air date. ${this.props.airDate}`
    return (
      <Layout
        next={this.props.next}
        nextText="next"
        speak={this.props.speak}
        voiceText={voiceText}
        toggleVoice={this.props.toggleVoice}
        voiceEnabled={this.props.voiceEnabled}
      >
        <h3 className="category-title">Show Info:</h3>
        <div className="category-listItem">
          Air Date: {this.props.airDate}
        </div>
        <div className="category-listItem">
          Show Number: {this.props.showNumber}
        </div>
      </Layout>
    )
  }
}
