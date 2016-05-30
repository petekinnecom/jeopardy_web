import React, { Component } from "react"
import Layout from "./Layout"

export default class Categories extends Component {

  _names() {
    return this.props.categories.map((name, i)=>{
      return (
        <div
          className="category-listItem"
          key={`category-${i}`}
        >
          {name}
        </div>
      )
    })
  }

  render(){
    const voiceText = `Categories. ${this.props.categories.join(".")}`

    return(
      <Layout
        previous={this.props.previous}
        next={this.props.next}
        nextText="next"
        voiceText={voiceText}
        speak={this.props.speak}
        toggleVoice={this.props.toggleVoice}
        voiceEnabled={this.props.voiceEnabled}
      >
        <h3 className="category-title">Categories:</h3>
        {this._names()}
      </Layout>
    )
  }
}
