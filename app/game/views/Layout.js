import React, { Component } from "react"
import * as Voice from "../../voice/Voice"

export default class Layout extends Component {

  _speakText() {
    if (this.props.voiceText) {
      Voice.speak(this.props.voiceText)
    }
  }

  componentDidMount() {
    if (this.props.voiceText) {
      Voice.speak(this.props.voiceText)
    }
  }

  back() {
    if (this.props.previous) {
      return (
        <a href="#" onClick={this.props.previous}>back</a>
      )
    }
    else {
      return (
        <span>&nbsp;</span>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="layout-header">
          <div className="layout-back">
            {this.back()}
          </div>
          <div className="layout-voice">
            <label>Voice:&nbsp;
              <input type="checkbox"/>
            </label>
          </div>
          <div>&nbsp;</div>
        </div>

        <div
          className="layout-body"
          onClick={this._speakText.bind(this)}
        >
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
