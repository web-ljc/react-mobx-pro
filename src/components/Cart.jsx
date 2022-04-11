import { Component } from "react";
import { inject, observer } from "mobx-react";

@inject('CartStore')
@observer
export default class Cart extends Component{
  render() {
    const { cartList, totalPrice, checkout } = this.props.CartStore
    return(
      <div>
        <h2>Cart</h2>
        <ul>
          {
            cartList.map(item => (
              <li key={item.id}>
                {item.title} - {item.price} * {item.quantity}
              </li>
            ))
          }
        </ul>
        <p>Total: {totalPrice}</p>
        <p>
          <button
            disabled={!cartList.length}
            onClick={() => checkout(cartList)}>chekcout</button>
        </p>
      </div>
    )
  }
}