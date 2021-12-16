import { useEffect, useState } from "react";

const useAllBooks = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(`https://enigmatic-cliffs-56694.herokuapp.com/allBooks`).then(
      (jsonData) => setAllProducts(jsonData)
    );
  }, []);
  return {
    allProducts,
    setAllProducts,
  };
};

export default useAllBooks ;

