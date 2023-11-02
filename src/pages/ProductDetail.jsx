/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { useState } from "react";

const ProductDetail = () => {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);

  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = () => {
    alert("추가되었음.");
  };
  return (
    <div className="flex flex-col mx-auto max-w-md my-20 gap-2">
      {"추가되었습니다!"}
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
