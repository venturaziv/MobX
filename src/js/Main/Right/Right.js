import React from "react"

export default class Right extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoInput: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <div>
        <h1>Right</h1>
        <div className="mobx-demo__right-controls">
          <input type="text" value={this.state.todoInput} onChange={(e)=>this.setState({todoInput: e.target.value})}/>
          <button onClick={this.handleClick}>Add</button>
        </div>
      </div>
    )
  }

  handleClick() {

  }
}