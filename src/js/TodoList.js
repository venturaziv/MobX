import React from "react"
import {observer} from 'mobx-react'

@observer
export default class TodoList extends React.Component {
  render() {
    const {todos} = this.props.store
    return (<h1>{todos[0]}</h1>)
  }
}
