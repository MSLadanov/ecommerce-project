import { CartItem } from "@components/CartItem";
import { useCart } from "@hooks/useCart";
import { ReactElement } from "react";

export const CartPage = (): ReactElement => {
  const { cart } = useCart((state) => state);
  return (
    <main>
      {cart.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </main>
  );
};
