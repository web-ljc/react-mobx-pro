import { Component } from "react";
import { observer, inject } from "mobx-react";

@inject('ProductsStore') // 对应store映射到组件
@observer
export default class Products extends Component{
  render() {
    const {count, items, increment, totalPrice, changeFn} = this.props.ProductsStore
    console.info(count, items.length, 9)
    return(
      <div>
        <h2>Products</h2>
        { count }
        <button onClick={() => changeFn(100)}>Increment</button>
        <p>{totalPrice}</p>
        <p>{totalPrice}</p>
        <p>{totalPrice}</p>
        <p>{totalPrice}</p>
        <p>{totalPrice}</p>
      </div>
    )
  }
}