"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import fetchData from "../api/route";

const ProductList = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  /**To keep the state of the pages */
  let [pages, setPages] = useState(1);


  const getProducts = async (pageNumber) => {
    try {
      const data = await fetchData(pageNumber);
      setProducts((previousProducts) => [...previousProducts, ...data]);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  useEffect(() => {
    getProducts(1);
  }, []);

 
  /**
   *
   * @returns number of products
   */
  const handleShowMore = () => {
    console.log("im clicked");
    const nextPage = pages + 20;
    setPages(nextPage);
    getProducts(nextPage)
    
  };

  return (
    <div>
      <div className="lg:max-h-[130rem] relative bottom-14 px-[8%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center  lg:max-w-none my-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product}  />
        ))}
      </div>
      <div className="w-full mb-10 text-center ">
        <button onClick={handleShowMore} className="border px-4 py-2 shadow-md">
          Show More
        </button>
      </div>
    </div>
  );
};

export default ProductList;
