import { action, observable} from 'mobx'
import * as shop from '../api/shop'

export default class ProductsStore{
  constructor(rootStore){
    this.rootStore = rootStore
  }

  @observable all = []

  @action.bound getAllProducts() {
    shop.getAllProducts(products => {
      this.setAll(products)
    })
  }

  @action.bound setAll(products) {
    this.all = [...products]
    // console.info(this.all, 9)
  }

  @action.bound decrementInventory(product) {
    console.info(product, this.all, 8)
    const prod = this.all.find(item => item.id === product.id)
    prod.inventory--
  }
}