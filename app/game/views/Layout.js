import React, { Component } from "react"

export default class Layout extends Component {
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
          {this.props.children}
        </div>

        <div className="layout-footer">
          <a
            href="#"
            className="layout-next"
            onClick={this.props.next}
          >
            {this.props.nextText}...
          </a>
        </div>
      </div>
    )
  }
}
