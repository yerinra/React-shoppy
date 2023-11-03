import useCart from "../hooks/useCart";

const CartNumber = () => {
  const {
    cartQuery: { data },
  } = useCart();

  return (
    <div className="text-white bg-shoppyAccent w-4 h-4 text-xs text-center font-bold rounded-full absolute -top-1 right-8">
      {data && data.reduce((prev, curr) => prev + curr.quantity, 0)}
    </div>
  );
};

export default CartNumber;
