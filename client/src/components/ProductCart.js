import React from 'react';

export default props => {
  const {product} = props;

  return (
    <div>
      <div className="productName">
        <h3>{product.name}</h3>
      </div>
      <img className="productImg" src={product.imageUrl} alt='product'/>
    </div>
  )
}
