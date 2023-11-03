import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <>
      {isLoading && (
        <p className="flex justify-center text-shoppyBlack font-sans mt-5">
          Loading...Please Wait...
        </p>
      )}
      {error && (
        <p className="flex justify-center text-shoppyBlack font-sans mt-5">
          Error!
        </p>
      )}
      <ul className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 my-10 pb-10 w-4/5 mx-auto">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
};

export default Products;
