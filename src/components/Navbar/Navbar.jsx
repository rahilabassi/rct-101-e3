import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
const Link = <a />;

const Navbar = () => {
  const {count}=useContext(CartContext);
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link"></Link>
      <span data-cy="navbar-cart-items-count">cart:{count}</span>
      <button data-cy="navbar-login-logout-button">logout</button>
    </div>
  );
};

export default Navbar;
