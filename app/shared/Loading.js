import React, { Component } from "react"

export default class Loading extends Component {

  unfreeze() {
    localStorage.clear()
    window.location = "/"
  }

  componentDidMount() {
    this.setState({})
    setTimeout(()=>{this.setState({frozen: true});}, 3000)
  }

  resetLink() {
    if (this.state && this.state.frozen) {
      return (
        <a href="#" onClick={this.unfreeze}> Reset (if frozen)</a>
      )
    }
  }


  render() {
    return (
      <div>
        <span>Loading...</span>
        <br />
        <br />
        {this.resetLink()}
      </div>
    )
  }
}
