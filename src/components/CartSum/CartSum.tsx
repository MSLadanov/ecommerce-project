import { ReactElement } from "react";
import { useCart } from "@hooks/useCart";
import { Button } from "@components/ui/Button";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

export const CartSum = (): ReactElement => {
  const { cart, getSum, getSumWithoutDiscounts } = useCart((state) => state);
  return (
    <Flex flexDirection="column" className="cart-summary">
      <Flex flexDirection="column" className="cart-summary__content">
        <p>{cart.length}</p>
        <p>{getSum()}</p>
        <p>{getSumWithoutDiscounts()}</p>
      </Flex>
      <Button styleGuide="wb">Make Order</Button>
    </Flex>
  );
};
