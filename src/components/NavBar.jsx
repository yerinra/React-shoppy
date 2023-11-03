import {
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineEdit,
} from "react-icons/ai";
import { SiAwesomelists } from "react-icons/si";
import { Link } from "react-router-dom";
import User from "./User";
import { useAuthContext } from "../context/AuthContext";
import Button from "./ui/Button";
import CartNumber from "./CartNumber";

const NavBar = () => {
  const { user, logIn, logOut } = useAuthContext();

  return (
    <section className="flex items-center bg-white justify-center pt-20">
      <section className="logo flex items-center justify-center text-3xl font-sans font-extrabold text-shoppyAccent mx-auto">
        <Link to="/" className="flex items-center ">
          <AiOutlineShop className="mr-2" />
          Shoppy
        </Link>
      </section>
      <section className="navs flex items-center justify-center mx-auto font-sans text-gray-900 text-bold">
        <Link to="/products" className="flex mr-5">
          <SiAwesomelists className="mr-2 text-xl" />
          <div>Products</div>
        </Link>
        {user && (
          <Link to="/cart" className="flex mr-5 relative">
            <AiOutlineShoppingCart className="mr-2 text-xl" />
            <div>Cart</div>
            <CartNumber />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="flex mr-5">
            <AiOutlineEdit className="mr-1.5 text-xl" />
            <div>New</div>
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={logIn}>Login</Button>}
        {user && <Button onClick={logOut}>Logout</Button>}
      </section>
    </section>
  );
};

export default NavBar;
