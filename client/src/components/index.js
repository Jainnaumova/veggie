/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './Navbar';
export {default as SingleProduct} from './SingleProduct.container';
export {default as AllProducts} from './AllProducts.container';
export {default as UserHome} from './UserHome';
export {Login, Signup} from './AuthForm';
export {default as Cart} from './Cart.container';
export {default as Checkout} from './Checkout.container';
