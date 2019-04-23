import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
// import toJson from 'enzyme-to-json';

import AllProductsContainer from '../../components/AllProducts.container';
import { requestProducts } from '../../store/product';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  products: [
    {
      name: 'Broccoli',
      imageUrl:
      'https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/broccoli_commodity-page.png',
      description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie nisl id egestas dignissim. Nullam turpis lorem, malesuada vitae fringilla a, pharetra maximus nibh. Sed id lectus ac mauris venenatis vulputate in nec erat. Pellentesque fringilla, ligula congue tempus molestie, ipsum nisl rhoncus ante, a sagittis sapien urna efficitur lectus. Vestibulum sollicitudin pharetra elit, a bibendum nibh feugiat id. Praesent efficitur, lorem non aliquet varius, tellus velit efficitur massa, et aliquam mi tortor at massa. Integer quis lacus ac risus hendrerit laoreet. Sed eu mauris pellentesque, pulvinar eros nec, viverra nulla. Vestibulum a ultricies ex. Integer bibendum ac enim non aliquet. Pellentesque aliquam ante vitae interdum eleifend.',
      inventory: 8,
      price: 799,
      tags: ['vegetable']
    },
    {
      name: 'Carrot',
      imageUrl:
      'https://purepng.com/public/uploads/large/purepng.com-carrotscarrotvegetablesfreshdeliciousefoodhealthycarrots-481521740717jmglq.png',
      description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie nisl id egestas dignissim. Nullam turpis lorem, malesuada vitae fringilla a, pharetra maximus nibh. Sed id lectus ac mauris venenatis vulputate in nec erat. Pellentesque fringilla, ligula congue tempus molestie, ipsum nisl rhoncus ante, a sagittis sapien urna efficitur lectus. Vestibulum sollicitudin pharetra elit, a bibendum nibh feugiat id. Praesent efficitur, lorem non aliquet varius, tellus velit efficitur massa, et aliquam mi tortor at massa. Integer quis lacus ac risus hendrerit laoreet. Sed eu mauris pellentesque, pulvinar eros nec, viverra nulla. Vestibulum a ultricies ex. Integer bibendum ac enim non aliquet. Pellentesque aliquam ante vitae interdum eleifend.',
      inventory: 6,
      price: 269,
      tags: ['vegetable']
    }
  ]
}
// // //
// const store = mockStore(initialState)

const products = [
  {
    name: 'Broccoli',
    imageUrl:
    'https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/broccoli_commodity-page.png',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie nisl id egestas dignissim. Nullam turpis lorem, malesuada vitae fringilla a, pharetra maximus nibh. Sed id lectus ac mauris venenatis vulputate in nec erat. Pellentesque fringilla, ligula congue tempus molestie, ipsum nisl rhoncus ante, a sagittis sapien urna efficitur lectus. Vestibulum sollicitudin pharetra elit, a bibendum nibh feugiat id. Praesent efficitur, lorem non aliquet varius, tellus velit efficitur massa, et aliquam mi tortor at massa. Integer quis lacus ac risus hendrerit laoreet. Sed eu mauris pellentesque, pulvinar eros nec, viverra nulla. Vestibulum a ultricies ex. Integer bibendum ac enim non aliquet. Pellentesque aliquam ante vitae interdum eleifend.',
    inventory: 8,
    price: 799,
    tags: ['vegetable']
  },
  {
    name: 'Carrot',
    imageUrl:
    'https://purepng.com/public/uploads/large/purepng.com-carrotscarrotvegetablesfreshdeliciousefoodhealthycarrots-481521740717jmglq.png',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie nisl id egestas dignissim. Nullam turpis lorem, malesuada vitae fringilla a, pharetra maximus nibh. Sed id lectus ac mauris venenatis vulputate in nec erat. Pellentesque fringilla, ligula congue tempus molestie, ipsum nisl rhoncus ante, a sagittis sapien urna efficitur lectus. Vestibulum sollicitudin pharetra elit, a bibendum nibh feugiat id. Praesent efficitur, lorem non aliquet varius, tellus velit efficitur massa, et aliquam mi tortor at massa. Integer quis lacus ac risus hendrerit laoreet. Sed eu mauris pellentesque, pulvinar eros nec, viverra nulla. Vestibulum a ultricies ex. Integer bibendum ac enim non aliquet. Pellentesque aliquam ante vitae interdum eleifend.',
    inventory: 6,
    price: 269,
    tags: ['vegetable']
  }
]


// const setup = (initialState={}) => {
//   const store = storeFactory(initialState)
//   const wrapper = mount(<Provider store={store}><Input /></Provider>)
//   console.log(wrapper.debug())
// }
//
// setup()

describe('AllProducts Container', () => {
  let store, wrapper;
  //
  beforeEach(() => {
    store = mockStore(initialState);
    // console.log(initialState);
    // console.log(store);
    // console.log(products);
    store.dispatch = jest.fn();
    // console.log(store.dispatch);
    wrapper = shallow(<AllProductsContainer store={store}/>,{ context: { store } });
    // wrapper = shallow(<Provider store={store}><AllProductsContainer /></ Provider>);
    // console.log(wrapper);
    // console.log(store);
  })

  it('maps state to props', () => {
    expect(wrapper.props().products).toEqual(products);
  });

  it('maps requestProducts to dispatch an action', () => {
    wrapper.props().requestProducts();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
})
