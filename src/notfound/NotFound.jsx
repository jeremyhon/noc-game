import React from 'react'

export default class NotFound extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <br />
        "Oops! This page doesn't exist!"
        <br />
        Click <a href="/noc-game">here</a> to go back.
      </div>
    )
  }
}
