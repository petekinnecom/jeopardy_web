import React, { Component } from "react"

export default class Question extends Component {
  render() {
    return (
      <div>
        <div className="layout-header">
          <div className="layout-back">
            <a href="#" onClick={this.props.previous}>back</a>
          </div>
          <div className="layout-voice">
            <label>Voice:&nbsp;
              <input type="checkbox" />
            </label>
          </div>
          <div>&nbsp;</div>
        </div>

        <div className="layout-body">

          <div className="challenge-value">
            {this.props.value}
          </div>

          <div className="challenge-category">
            {this.props.category}
          </div>

          <div className="challenge-body">
            {this.props.question}
          </div>
        </div>

        <div className="layout-footer">
          <a
            href="#"
            className="layout-next"
            onClick={this.props.next}
          >
            next...
          </a>
        </div>
      </div>
    )
  }
}
