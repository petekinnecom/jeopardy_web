import React, { Component } from "react"

export default class Categories extends Component {

  _names() {
    return this.props.categories.map((name, i)=>{
      return (
        <li key={`category-${i}`}>{name}</li>
      )
    })
  }

  render(){
    return(
      <ul onClick={this.props.next}>
        {this._names()}
      </ul>
    )
  }
}
