import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';

import ProductCart from '../../components/ProductCart';

Enzyme.configure({ adapter: new Adapter() });

let props = {
  product: {
    name: 'Broccoli',
    imageUrl: 'https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/broccoli_commodity-page.png'
  }
};

const component = () => shallow(<ProductCart {...props} />);

describe('ProductCart', () => {

  it('should display empty page with no produce', () => )
})
