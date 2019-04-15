import {connect} from 'react-redux';

import Checkout from './Checkout';

import {requestOrder, recieveEmptyCart} from '../store/cart'

const mapState = state => ({
  cart: state.cart,
  user: state.user
})

const mapDispatch = dispatch => ({
  requestOrder: id => dispatch(requestOrder(id)),
  recieveEmptyCart: () => dispatch(recieveEmptyCart())
})

export default connect(mapState, mapDispatch)(Checkout)
