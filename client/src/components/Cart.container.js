import {connect} from 'react-redux';

import Cart from './Cart';

import {
  requestCart,
  requestCheckout,
  removeItem,
  setTotalSub
} from '../store/cart';

const mapState = state => ({
  id: state.user.id,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  requestCheckout: id => dispatch(requestCheckout(id)),
  requestCart: id => dispatch(requestCart(id)),
  removeItem: info => dispatch(removeItem(info)),
  setTotalSub: total => dispatch(setTotalSub(total))
})

export default connect(mapState, mapDispatch)(Cart)
