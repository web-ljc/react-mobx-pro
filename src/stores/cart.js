import { observable, action, computed } from "mobx";
import * as api from '../api/shop'

export default class CartStore{
  constructor(rootStore){
    this.rootStore = rootStore
  }

  @observable cartList = []

  @action.bound addToCart(obj) {
    const prod = this.cartList.find(item => item.id === obj.id)
    if (!prod) {
      this.cartList.push({
        ...obj,
        quantity: 1
      })
    } else {
      prod.quantity++
    }
    this.rootStore.ProductsStore.decrementInventory(obj)
    // console.info(this.cartList, 6)
  }

  @computed get totalPrice() {
    return this.cartList.reduce((total, prod) => {
      return total + prod.price * prod.quantity
    }, 0)
  }

  @action.bound checkout(products) {
    // 备份数据
    const savedProducts = [...products]
    // 清空购物车
    this.setItems([])
    // 发起结算请求
    api.buyProducts(
      products,
      () => {
        console.info('成功')
      },
      () => {
        console.info('失败')
        this.setItems(savedProducts)
      }
    )
  }

  @action.bound setItems(obj) {
    this.cartList = obj
  }
}