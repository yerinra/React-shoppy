import CartItem from "../components/CartItem";
import Price from "../components/Price";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

const Cart = () => {
  const {
    cartQuery: { isLoading, error, data },
    payCart,
  } = useCart();

  if (isLoading)
    return (
      <p className="flex justify-center text-shoppyBlack font-sans mt-5">
        Loading... Please wait...
      </p>
    );
  if (error)
    return (
      <p className="flex justify-center text-shoppyBlack font-sans mt-5">
        Error! Please try again!{error.message}
      </p>
    );

  const hasProduct = data && data.length > 0;
  const totalPrice =
    data &&
    data.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  const handlePay = () => {
    payCart.mutate();
  };

  return (
    <div className="flex flex-col items-center my-10 gap-5 sm:mx-20 mx-40  ">
      <div className="text-xl font-bold shrink-0">나의 장바구니</div>
      {!hasProduct && <p>장바구니에 상품이 없습니다.</p>}
      {hasProduct && (
        <div className="flex flex-col my-10 gap-10">
          <ul className="flex flex-col gap-5">
            {data.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <Price totalPrice={totalPrice} />
          <Button onClick={handlePay}>결제하기</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
