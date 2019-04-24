import React from 'react';
import BuyButton from './BuyButton';

export default props => {
  const {product} = props;

  return (
    <div className='producCart'>
      <div className="productName">
        <h3>{product.name}</h3>
      </div>
      <img className="productImg" src={product.imageUrl} alt='product'/>
      <BuyButton />
    </div>
  )
}
