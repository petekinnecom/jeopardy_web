import React, { Component } from "react"
import * as Voice from "../../voice/Voice"

export default class Layout extends Component {

  _speakText() {
    Voice.speak(this.props.voiceText)
  }

  componentDidMount() {
    if (this.props.voiceEnabled) {
      Voice.speak(this.props.voiceText)
    }
  }

  _back() {
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

  _voice() {
    if (window.speechSynthesis) {
      return (
        <label>Voice:&nbsp;
          <input
            type="checkbox"
            defaultChecked={this.props.voiceEnabled}
            onClick={this.props.toggleVoice}
          />
        </label>
      )
    }
    else {
      return (
        <span>Voice Unavailable</span>
      )
    }
  }

  _footer() {
    const next = (
      <span className="layout-footer-next">
        <a
          href="#"
          onClick={this.props.next}
        >
          next
        </a>
      </span>
    )

    const read = (
      <span className="layout-footer-read">
        <a
          href="#"
          onClick={this._speakText.bind(this)}
        >
          read
        </a>
      </span>
    )

    return (
      <div className="layout-footer">
        {window.speechSynthesis ? read : ""}
        {next}
      </div>
    )


  }

  render() {
    return (
      <div>
        <div className="layout-header">
          <div className="layout-back">
            {this._back()}
          </div>
          <div className="layout-voice">
            {this._voice()}
          </div>
          <div>&nbsp;</div>
        </div>

        <div
          className="layout-body"
          onClick={this._speakText.bind(this)}
        >
          {this.props.children}
        </div>
        {this._footer()}
      </div>
    )
  }
}
