import { ReactElement } from "react";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import './style.scss';

export const EmptyWishlist = (): ReactElement => {
  return (
    <div className="empty-wishlist">
      <div className="empty-wishlist__content">
        <FaHeart className="empty-wishlist__icon" size={48} />
        <h3 className="empty-wishlist__title">Your Wishlist is Empty</h3>
        <p className="empty-wishlist__message">
          You haven't added any items yet. Start browsing to save your favorite products!
        </p>
        <Link to="/products" className="empty-wishlist__button">
          Browse Products
        </Link>
      </div>
    </div>
  );
};