import {connect} from 'react-redux';

import AllProducts from './AllProducts';

import {requestProducts} from '../store/product'

const mapState = state => ({
  products: state.product.products
})

const mapDispatch = dispatch => ({
  requestProducts: () => dispatch(requestProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
