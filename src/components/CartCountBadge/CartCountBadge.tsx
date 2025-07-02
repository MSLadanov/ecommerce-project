import { ReactElement } from "react";
import { useCart } from "@/hooks/useCart";
import "./style.scss";

export const CartCountBadge = (): ReactElement => {
  const { cart } = useCart((state) => state);
  if (cart.length) {
    return <div className="card-count-badge">{cart.length}</div>;
  }
};
