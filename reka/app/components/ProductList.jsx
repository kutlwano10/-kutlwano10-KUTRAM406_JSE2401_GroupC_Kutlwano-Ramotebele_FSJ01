"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import fetchData from "../api/route";

const ProductList = () => {
  let [products, setProducts] = useState([]);
  let [moreProducts, setMoreProducts] = useState([]);
  let page = 1;

  /**
   *
   * @returns number of products
   */
  const handleShowMore = () => {
    console.log("im clicked");
    return { ...products, moreProducts };
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchData();
      return setProducts(data);
    };
    return getProducts;
  }, []);

  useEffect(() => {
    const getMoreProducts = async () => {
      const data = await fetchData(20);
      return setMoreProducts(data);
    };
    return getMoreProducts;
  });

  return (
    <div>
      <div className="lg:max-h-[130rem] relative bottom-14 px-[8%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center  lg:max-w-none my-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
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
