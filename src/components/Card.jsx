import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export default function Card({ item }) {
  const { addItem } = useCartContext();

  return (
    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
        <img
          src={item.img}
          className="card-img-top"
          alt="card description"
        />
        <div className="card-body">
          <h2>
            <b>{item.name}</b>
          </h2>
          <h6>Ingrediente</h6>
          <ul>
            {item.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h5>
            <b>Precio: ${formatPrice(item.price)}</b>
          </h5>
          <div className="d-flex gap-2">
            <Link
              to="/cart"
              className="btn btn-outline-primary"
              onClick={() => addItem(item)}
            >
              Comprar
            </Link>
            <Link
              to={`/pizzas/${item.id}`}
              className="btn btn-outline-danger"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
