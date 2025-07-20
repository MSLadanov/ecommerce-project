import { ReactElement } from "react";
import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import './style.scss';

export const EmptyCart = (): ReactElement => {
  return (
    <div className="empty-cart">
      <div className="empty-cart__content">
        <FaShoppingCart className="empty-cart__icon" size={48} />
        <h3 className="empty-cart__title">Your Cart is Empty</h3>
        <p className="empty-cart__message">
          You haven't added any items yet. Start shopping to fill your cart!
        </p>
        <Link to="/products" className="empty-cart__button">
          Browse Products
        </Link>
      </div>
    </div>
  );
};