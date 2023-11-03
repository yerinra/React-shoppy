/* eslint-disable react/prop-types */

import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useState } from "react";
import useCart from "../hooks/useCart";
import { useAuthContext } from "../context/AuthContext";

const ProductDetail = () => {
  const { user } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const { addOrUpdateItem } = useCart();
  const nav = useNavigate();

  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    e.preventDefault();
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess(
          user
            ? "성공적으로 추가되었습니다. 3초 후에 장바구니로 이동합니다..."
            : "로그인 해주세요. 3초 후에 메인 화면으로 이동합니다."
        );
        setTimeout(() => setSuccess(null), 2000);
        setTimeout(() => nav("/cart"), 3000);
      },
    });
  };
  return (
    <div className="flex flex-col mx-auto max-w-md my-20 gap-2">
      {success && <p>{success}</p>}
      <img src={image} className="rounded-md" />

      <div className="mx-2 flex flex-col gap-2">
        <div className="flex mt-2 justify-between items-center">
          <div className="font-bold text-xl">{title}</div>
          <div>{`₩${price.toLocaleString()}`}</div>
        </div>
        <div className="mt-2 text-shoppyGray">{description}</div>
        <form className="flex mb-3 gap-2">
          <label htmlFor="options">Options</label>
          <select
            id="options"
            name="options"
            className="outline-none"
            onChange={handleSelect}
          >
            {options &&
              options.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </form>
        <Button onClick={handleClick}>장바구니에 추가하기</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
