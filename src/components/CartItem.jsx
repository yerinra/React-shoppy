/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
  AiOutlineDelete,
} from "react-icons/ai";
import useCart from "../hooks/useCart";

const CartItem = ({
  item: { id, image, option, price, quantity, title, category, description },

  item,
}) => {
  const { addOrUpdateItem, removeItem } = useCart();

  const handleDelete = () => {
    removeItem.mutate({ id });
  };
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...item, quantity: item.quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...item, quantity: item.quantity + 1 });
  };
  const nav = useNavigate();
  const handleClick = () => {
    nav(`/products/${id}`, {
      state: { product: item },
    });
  };
  return (
    <section className="flex flex-col items-center w-full md:flex-row gap-5">
      <img
        src={image}
        alt={title}
        className="sm:w-100 max-w-sm rounded-md cursor-pointer"
        onClick={handleClick}
      />
      <div className="flex flex-col justify-between gap-3 items-center md:items-start w-full">
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="font-extrabold text-2xl truncate">{title}</div>
          <div className="text-shoppyAccent font-extrabold">{option}</div>
          <AiOutlineDelete
            className="shrink-0 cursor-pointer"
            onClick={handleDelete}
          />
        </div>

        <div className="flex w-full justify-between items-center gap-3 ">
          <div className="font-bold">{`${price.toLocaleString()}원`}</div>
          <div className="flex gap-3">
            <AiOutlineMinusSquare
              onClick={handleMinus}
              className="cursor-pointer"
            />
            <div>{quantity}</div>
            <AiOutlinePlusSquare
              onClick={handlePlus}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
