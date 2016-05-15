import React, { Component } from "react"

export default class Link extends Component {

  render() {
    const onClick = this.props.onClick
    return (
        <a
          href="#"
          onClick={(event)=>{
            event.preventDefault()
            onClick()
          }}
        >
          {this.props.children}
        </a>
    )
  }
}
