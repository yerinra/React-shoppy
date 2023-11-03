/* eslint-disable react/prop-types */
const SHIPPING_FEE = 3000;
const Price = ({ totalPrice }) => {
  const priceStyle =
    "bg-slate-200 px-7 py-5 rounded-lg flex flex-col items-center gap-3 shrink-0";

  return (
    <section className="flex justify-center items-center mb-10 mx-1 gap-3 md:gap-10">
      <div className={priceStyle}>
        <p>상품금액</p>
        <p className="font-bold">{`${totalPrice.toLocaleString()}원`}</p>
      </div>
      <p>+</p>
      <div className={priceStyle}>
        <p>배송비</p>
        <p className="font-bold">{`${SHIPPING_FEE.toLocaleString()}원`}</p>
      </div>
      <p>=</p>
      <div className={priceStyle}>
        <p>결제예정금액</p>
        <p className="font-bold">{`${(
          SHIPPING_FEE + totalPrice
        ).toLocaleString()}원`}</p>
      </div>
    </section>
  );
};

export default Price;
