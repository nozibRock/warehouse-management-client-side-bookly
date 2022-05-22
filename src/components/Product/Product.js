import React from 'react';

const Product = ({product}) => {
    const {id, name/* , author, publisher, isbn, pages, quantity, price,  */,img} = product;
    return (
      <div>
          <img src={img} alt="" />
        <h2> {id}. This is Product: {name}  </h2>
      </div>
    );
};

export default Product;