import React, {Component, PropTypes} from 'react'

export default class Board extends Component {

  render () {
    return <div>
      <h3>Round 1 Categories</h3>
      <button onClick={this.props.next}>Next</button>
    </div>
  }
}
Board.propTypes = {
  next: PropTypes.func.isRequired
}
