import { ReactElement } from "react";
import { useCart } from "@hooks/useCart";
import "./style.scss";

export const CartSum = (): ReactElement => {
  const { cart } = useCart((state) => state);
  return <div>{cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}</div>;
};
