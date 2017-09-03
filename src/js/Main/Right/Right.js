import React from "react"

export default class Right extends React.Component {
  render() {
    return (
      <div>
        <h1>Right</h1>
        <div className="mobx-demo__right-controls">
          <input type="text"/>
          <button>Add</button>
        </div>
      </div>
    )
  }
}