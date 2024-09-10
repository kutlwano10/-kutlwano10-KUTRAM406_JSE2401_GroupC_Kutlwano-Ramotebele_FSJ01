import ProductCard from "./ProductCard";
import fetchData from "../api/page";

const ProductList = async () => {
  const products = await fetchData();

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
