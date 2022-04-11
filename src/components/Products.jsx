import { Component } from "react";
import { observer, inject } from "mobx-react";

@inject('ProductsStore', 'CartStore') // 对应store映射到组件
@observer
export default class Products extends Component{
  // 初始化加载数据
  componentDidMount() {
    this.props.ProductsStore.getAllProducts()
  }
  render() {
    const { all } = this.props.ProductsStore
    const { addToCart } = this.props.CartStore
    return(
      <div>
        <h2>Products</h2>
        <ul>
          {
            all.map(item => (
              <li key={item.id}>
                {item.title} - {item.price} * {item.inventory}
                <br />
                <button
                  disabled={item.inventory<=0}
                  onClick={() => addToCart(item)}>
                    {item.inventory <= 0 ? 'Sold Out' : 'Add to cart'}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}