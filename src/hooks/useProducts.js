import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/book")
          .then((res) => res.json())
          .then((data) => setProducts(data));
    }, [])
    
    return [products, setProducts];
};

export default useProducts;