import { connect } from 'react-redux';
import AllProducts from './AllProducts';
import { requestProducts } from '../store/product';

const mapStateToProps = state => ({
  products: state.product.products
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(requestProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProducts);
