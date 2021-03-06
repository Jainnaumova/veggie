import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import AllProducts from '../../components/AllProducts';

jest.mock('../../components/ProductCart', () => 'ProductCart');

Enzyme.configure({ adapter: new Adapter() });

let props = {
  products: [{
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
  }],
  requestProducts: jest.fn()
}

const component = () => shallow(<AllProducts {...props} />);

describe('AllProducts', () => {

  it('should match the snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <AllProducts {...props} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render empty page with no produce', () => {
    expect(component().setProps({products: []}).find('p').at(0).text()).toEqual('There is currently no produce in the database');
  });

  it('should render correct amount of Product cards', () => {
    expect(component().setProps({ products: [{id:1},{id:2},{id:3}]}).find('ProductCart')).toHaveLength(3);
  });

  it('should call requestProducts when componentDidMount', () => {
    expect(component().setProps().instance().props.requestProducts).toHaveBeenCalled();
  });

  it('should receive props', () => {
    expect(component().instance().props).toEqual(props);
  });
})
