import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';

import ProductCart from '../../components/ProductCart';

Enzyme.configure({ adapter: new Adapter() });

let props = {
  product: {
    name: 'Broccoli',
    imageUrl:
    'https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/broccoli_commodity-page.png'
  }
}

const component = () => shallow(<ProductCart {...props} />);

describe('ProductCart', () => {

  it('should match the snapshot', () => {
    const tree = renderer.create(
      // <MemoryRouter>
        <ProductCart {...props} />
      // </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should dynamic render ProductCart', () => {
    // change product
    props.product.name = 'Carrot';
    props.product.imageUrl = 'https://purepng.com/public/uploads/large/purepng.com-carrotscarrotvegetablesfreshdeliciousefoodhealthycarrots-481521740717jmglq.png';
    expect(component().find("h3").text()).toEqual("Carrot");
    // reset product
    props.product.name = 'Broccoli';
    props.product.imageUrl = 'https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/broccoli_commodity-page.png';
  });

  it("renders the name of the product in an <h3>", () => {
    expect(component().find("h3").text()).toEqual("Broccoli");
  });

})
