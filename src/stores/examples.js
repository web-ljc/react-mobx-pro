import { action, observable, autorun, computed, configure, runInAction } from 'mobx'

// 严格，只能通过装饰action函数修改
configure({
  enforceActions: 'observed'
})

export default class ProductsStore{
  constructor(rootStore){
    this.rootStore = rootStore
  }
  @observable items = []
  @observable name = '23'
  @observable count = 0
  // bound绑定函数this指向store
  @action.bound increment(val) {
    this.count+=val
    console.info(this.count, 998)
  }

  @observable num = 10
  @observable price = 20
  // 计算属性会依赖计算结果，除非依赖属性发生变化。否则就复用结果
  @computed get totalPrice() {
    return this.num * this.price
  }

  // 尽量使用action的方法更改数据
  @action.bound changeFn() {
    setTimeout(() => {
      // this.count = 10 // 异步函数不能直接更改数据
      // 1.定义action函数
      // this.changeCount()
      // 2.直接调用action函数
      // action('changeFn', () => {
      //   this.name = 'test'
      // })
      // 3.runInAction
      runInAction(() => {
        this.count = 100
      })
    }, 100)
  }
  // 异步函数调用 
  @action.bound changeCount() {
    this.count = 20
  }
}