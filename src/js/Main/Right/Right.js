import React from "react"
import {observer} from 'mobx-react'


@observer
export default class Right extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoInput: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Right</h1>
        <div className="mobx-demo__right-controls">
          <input type="text" value={this.state.todoInput} onChange={(e)=>this.setState({todoInput: e.target.value})}/>
          <button>Add</button>
        </div>
      </div>
    )
  }
}