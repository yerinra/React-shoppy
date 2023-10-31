import { useEffect, useState } from "react";
import { logIn, logOut, onUserStateChange } from "../api/firebase";
import {
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineEdit,
} from "react-icons/ai";
import { SiAwesomelists } from "react-icons/si";
import { Link } from "react-router-dom";
import User from "./User";

const NavBar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

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
          <SiAwesomelists className="mr-2" />
          <div>Products</div>
        </Link>
        {user && (
          <Link to="/cart" className="flex mr-5">
            <AiOutlineShoppingCart className="mr-2" />
            <div>Cart</div>
          </Link>
        )}
        {user && (
          <Link to="/products/new" className="flex mr-5">
            <AiOutlineEdit className="mr-1.5" />
            <div>New</div>
          </Link>
        )}
        {user && <User user={user} />}
        {!user && (
          <button className="bg-white px-3 p-1 loginBtn" onClick={logIn}>
            LogIn
          </button>
        )}
        {user && (
          <button className="bg-white px-3 p-1 loginBtn" onClick={logOut}>
            LogOut
          </button>
        )}
      </section>
    </section>
  );
};

export default NavBar;
