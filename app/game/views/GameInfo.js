import React, { Component } from "react"
import Layout from "./Layout"

export default class GameInfo extends Component {
  render() {
    return (
      <Layout
        next={this.props.next}
        nextText="next"
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
