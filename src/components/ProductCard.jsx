import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({
  product,
  product: { id, image, title, category, price },
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/producs/${id}`, {
      state: { product },
    });
  };
  return (
    <li
      onClick={handleClick}
      className="overflow-hidden shadow-md rounded-md cursor-pointer flex flex-col justify-between"
    >
      <img src={image} alt={title} className="h-4/5 object-cover" />
      <div className="mt-auto px-4 mb-4">
        <p className="font-bold my-1 text-md truncate">{title}</p>
        <div className="flex justify-between">
          <p className="text-xs text-shoppyGray truncate">{category}</p>
          <p className="text-sm ml-2">{`₩${price.toLocaleString()}`}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
