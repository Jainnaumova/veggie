import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CheckoutButton from './CheckoutButton';

import '../assets/styles/cart.css'

export default class Cart extends Component {
  constructor() {
    super()
    this.getProductInfo = this.getProductInfo.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  total = 0

  getProductInfo(productId) {
    return this.props.cart.currentOrder.products.filter(x => {
      return x.id === productId
    })
  }

  deleteItem(productId, quantity, price) {
    console.log('start props ', this.props)
    let orderId = this.props.cart.currentOrder.id
    let info = {productId, orderId}
    this.props.removeItem(info)
    let newTotal = this.props.cart.currentOrder.total - quantity * price
    let updateInfo = {total: newTotal, orderId}
    this.props.setTotalSub(updateInfo)
    console.log('end props ', this.props)
    this.props.requestCart(this.props.id)
  }

  componentDidMount() {
    this.props.requestCart(this.props.id)
  }

  render() {
    // console.log('userId', this.props.id);
    let total = 0
    let items = this.props.cart.orderItems || []
    if (this.props.cart.currentOrder) {
      total = this.props.cart.currentOrder.total
    }
    if (items) {
      return (
        <div className='cart-component-all'>
          <div className='product-info'>
            {items.map(item => {
              let product = this.getProductInfo(item.productId)[0]
              return (
                <div className='product-item' key={item.productId}>
                  <img className='img-cart' src={product.imageUrl} width="128" height="128" alt='product'/>
                  <div>
                    <h2>{product.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: $ {item.price / 100}</p>
                    <button className='remove-button'
                      type="button"
                      onClick={() =>
                        this.deleteItem(item.productId, item.quantity, item.price)
                      }
                    >
                      remove
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="total-cart">
            <h2>Total: ${total / 100}</h2>
            <Link to="/checkout">
              <CheckoutButton total={total}/>
            </Link>
          </div>
        </div>
      )
    } else {
      return <div>cart is empty, add some veggies to your cart</div>
    }
  }
}

// <button className={total === 0 ? 'button-add button-disable' : 'button-add'} type="button" disabled={total === 0}>Checkout</button>
