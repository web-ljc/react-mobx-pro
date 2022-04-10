import { observable } from "mobx";

export default class CartStore{
  @observable name = ''

  constructor(rootStore){
    this.rootStore = rootStore
  }
}