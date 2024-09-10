import Image from "next/image";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <>
    <Header/>
    <div>
    <ProductList/>
    </div>
    </>
    
  );
}
