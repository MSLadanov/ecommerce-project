import { ReactElement } from "react";
import { CartItem } from "@components/CartItem";
import { useCart } from "@hooks/useCart";
import { Flex } from "@components/ui/Flex";
import { EmptyCart } from "@components/EmptyCart";
import { CartSum } from "@components/CartSum";
import "./style.scss";

export const CurrentCart = (): ReactElement => {
  const { cart } = useCart((state) => state);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <Flex className="cart" justifyContent="space-between">
      <Flex className="current-cart" flexDirection="column">
        {[...new Map(cart.map((item) => [item.id, item])).values()].map(
          (item) => (
            <CartItem key={item.cart_id} product={item} isCurrentCart={true} />
          )
        )}
      </Flex>
      <CartSum />
    </Flex>
  );
};
