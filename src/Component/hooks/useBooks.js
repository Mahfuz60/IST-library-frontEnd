import { useEffect, useState } from 'react';

const useBooks = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://enigmatic-cliffs-56694.herokuapp.com/books`)
            .then(response => response.json())
            .then(jsonData => setProducts(jsonData))
    }, []);
    return {
        products,
        setProducts
    }
};

export default useBooks;