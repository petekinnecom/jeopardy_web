import React, { Component } from "react"
import { connect } from 'react-redux'

export default class HelloSpan extends Component {
  render() {
    return (
      <a href="#" onClick={this.props.onClick}>{this.props.text}</a>
    )
  }
}

const updateText = () => {
  return {
    type: "UPDATE_TEXT"
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(updateText())
    }
  }
}

const ConnectedHelloSpan = connect(mapStateToProps, mapDispatchToProps)(HelloSpan)
export default ConnectedHelloSpan
