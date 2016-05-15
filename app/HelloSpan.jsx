import React, { Component } from "react"
import { connect } from 'react-redux'

export default class HelloSpan extends Component {
  render() {
    return (
      <span>{this.props.text}</span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

const ConnectedHelloSpan = connect(mapStateToProps)(HelloSpan)
export default ConnectedHelloSpan
