import React, {Component, PropTypes} from 'react'

export default class Board extends Component {
  // const propTypes = {
  //   next: PropTypes.func.isRequired
  // };

  render () {
    return <div>
      <h3>Round 1 Categories</h3>
      <button onClick={this.props.next}>Next</button>
    </div>
  }
}
