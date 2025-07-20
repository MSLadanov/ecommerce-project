import { ReactElement } from "react";
import { FaBoxOpen } from "react-icons/fa";
import './style.scss';

export const EmptyOrders = (): ReactElement => {
  return (
    <div className="empty-orders">
      <div className="empty-orders__content">
        <FaBoxOpen className="empty-orders__icon" size={48} />
        <h3 className="empty-orders__title">No Orders Found</h3>
        <p className="empty-orders__message">
          You haven't placed any orders yet. Start shopping to see your order history here!
        </p>
      </div>
    </div>
  );
};