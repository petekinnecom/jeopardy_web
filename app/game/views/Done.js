import React, { Component } from "react"
import Layout from "./Layout"

export default class Done extends Component {
  render() {
    return (
      <Layout
        previous={this.props.previous}
        next={this.props.next}
        nextText="menu"
      >
        <h1>Thanks for playing</h1>
      </Layout>
    )
  }
}
