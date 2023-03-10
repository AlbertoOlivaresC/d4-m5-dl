import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export default function Navbar() {
  const { totalCart } = useCartContext();

  return (
    <nav className="navbar navbar-dark bg-success">
      <div className="container">
        <NavLink
          className="navbar-brand"
          to="/"
        >
          MamaMía 😋
        </NavLink>
        <div className="d-flex gap-2">
          <NavLink
            className="btn btn-outline-light"
            to="/pizzas"
          >
            Pizzas
          </NavLink>
          <NavLink
            className="btn btn-outline-info me-2"
            to="/cart"
          >
            Carrito: ${formatPrice(totalCart())}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

