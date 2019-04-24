import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

// import { Provider } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CartContainer from '../../components/Cart.container';

import { requestCart, removeItem, setTotalSub } from '../../store/cart';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  id: 1,
  cart: {
    currentOrder: {},
    orderItems: []
  }
}

describe('CartContainer Container', () => {
  let store, wrapper;

  beforeEach(() => {
    store = mockStore({initialState});
    store.dispatch = jest.fn();
    wrapper = shallow(<CartContainer store={store} />)
  });

  it('maps state to props', () => {
    expect(wrapper.props().state).toEqual(state);
  });

  it('maps requestCart to dispatch an action', () => {
    wrapper.props().requestCart();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('maps removeItem to dispatch an action', () => {
    wrapper.props().removeItem();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('maps setTotalSub to dispatch an action', () => {
    wrapper.props().setTotalSub();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

})
