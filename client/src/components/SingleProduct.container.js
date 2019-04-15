import {connect} from 'react-redux';

import SingleProduct from './SingleProduct';

import {requestProduct} from '../store/product';
import {orderItemInput, requestCart, setTotal} from '../store/cart';

const mapStateToProps = state => ({
  product: state.product.selectedProduct,
  user: state.user,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  requestProduct: productId => dispatch(requestProduct(productId)),
  orderItemInput: orderInfo => dispatch(orderItemInput(orderInfo)),
  requestCart: id => dispatch(requestCart(id)),
  setTotal: total => dispatch(setTotal(total))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
