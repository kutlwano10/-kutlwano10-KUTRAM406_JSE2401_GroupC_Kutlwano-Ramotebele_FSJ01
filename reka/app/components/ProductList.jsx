import ProductCard from "./ProductCard";
import fetchData from "../api/page";
import Header from "./Header";

const ProductList = async () => {
  const products = await fetchData();

  return (
    <div>
        <div className="lg:max-h-[130rem] relative bottom-14 px-[8%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-6 justify-center md:grid-cols-3 lg:mx-[9%] items-center  lg:max-w-none my-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
    </div>
  );
};

export default ProductList;
