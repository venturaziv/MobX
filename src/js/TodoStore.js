import { observable } from "mobx"

export class TodoStore {
  @observable todos = []
}

export default new TodoStore

