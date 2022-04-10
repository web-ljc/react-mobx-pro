import ProductsStore from "./products";
import CartStore from "./cart";

export default class RootStore {
  constructor() {
    this.ProductsStore = new ProductsStore(this)
    this.CartStore = new CartStore(this)
  }
}