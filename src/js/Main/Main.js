import React from "react"
import Left from './Left/Left'
import Right from './Right/Right'

export default class Main extends React.Component {
  render() {
    return(
      <div className="mobx-demo">
        <div className="mobx-demo__left">
          <Left/>
        </div>
        <div className="mobx-demo__right">
          <Right/>
        </div>
      </div>
    )
  }
}
