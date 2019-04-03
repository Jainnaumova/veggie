const axios = require('axios');

import {GET_PRODUCT, GET_PRODUCTS} from '../store/product';
import {getProduct, getProducts, requestProducts, requestProduct} from '../store/product';

describe('ProductActions', () => {

  const expectedAll = { type: GET_PRODUCTS, products: [{id: 1}, {id: 2}, {id: 3}] };
  const productsUrl = '/api/products';

  const expectedOne = { type: GET_PRODUCT, selectedProduct: {id: 2} };
  const productUrl = `/api/products/${id}`


  it('handles a getProducts action', async () => {

    axios.get = jest.fn((url) => {
      if (url === productsUrl) {
        return Promise.resolve({ data: expectedAll.products });
      }
    });
    const dispatch = jest.fn();
    await requestProducts()(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedAll);
  });

  it('handles a getProduct action', async () => {

    axios.get = jest.fn((url) => {
      if (url === productUrl) {
        return Promise.resolve({ data: expectedOne.selectedProduct})
      }
    });
    const dispatch = jest.fn();
    await requestProduct(2)(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedOne);
  })

})
