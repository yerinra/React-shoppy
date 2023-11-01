/* eslint-disable react/prop-types */
const Button = ({ children, onClick, type }) => {
  return (
    <button
      className="bg-shoppyAccent text-white p-2 rounded-md mx-3"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
