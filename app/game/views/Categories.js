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
    return(
      <Layout
        previous={this.props.previous}
        next={this.props.next}
        nextText={this.props.nextText}
      >
        <h3 className="category-title">Categories:</h3>
        {this._names()}
      </Layout>
    )
  }
}
