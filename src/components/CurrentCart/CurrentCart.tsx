import { ReactElement } from "react";
import { CartItem } from "@components/CartItem";
import { useCart } from "@hooks/useCart";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

export const CurrentCart = (): ReactElement => {
  const { cart } = useCart((state) => state);
  return (
    <Flex className="current-cart" flexDirection="column">
      {cart.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </Flex>
  );
};
