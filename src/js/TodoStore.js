import {observable, autorun} from 'mobx'

class TodoStore {
  @observable todos = ["dream", "believe", "achieve"]
}

var store = window.store = new TodoStore

export default store

autorun(()=>{
  console.log("store has changed!", store.todos[0])
})