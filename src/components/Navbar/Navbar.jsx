import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const { cartitem } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
 
    if (isAuth) {
      logout();
    } else {
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar">
      <div>
        <Link data-cy="navbar-home-link" to="/">
          Mylogo
        </Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">
          Cart: {cartitem && `(${cartitem})`}
        </div>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
