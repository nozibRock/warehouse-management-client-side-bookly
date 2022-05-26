import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2>Welcome to detail: {productId} </h2>
            <div className='text-center mx-auto'>
                <Link to="/checkout">
                    <button className=''>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;