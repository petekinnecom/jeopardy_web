import React, { Component } from "react"
import Layout from "./Layout"

export default class Done extends Component {
  render() {
    return (
      <Layout
        previous={this.props.previous}
        next={this.props.next}
        nextText="menu"
        voiceText="Thanks for playing"
        speak={this.props.speak}
      >
        <h1>Thanks for playing</h1>
      </Layout>
    )
  }
}
