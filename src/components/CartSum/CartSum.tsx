import { ReactElement } from "react";
import { useCart } from "@hooks/useCart";
import { Button } from "@components/ui/Button";
import { Flex } from "@components/ui/Flex";
import { useAuth } from "@hooks/useAuth";
import { Notify } from "@components/ui/Notify";
import { useNotify } from "@hooks/useNotify";
import { useOrderedProducts } from "@hooks/useOrderedProducts";
import "./style.scss";

export const CartSum = (): ReactElement => {
  const { cart, getSum, getSumWithoutDiscounts, clearCart } = useCart(
    (state) => state
  );
  const { addToOrderedProducts } = useOrderedProducts((state) => state)
  const { notifyRef, isNotifyShowed, notifyType, notifyText, toggleNotify } =
    useNotify({ delay: 3000 });
  const { isAuth } = useAuth();
  const placeAnOrder = () => {
    toggleNotify("success", "You have successfully placed your order");
    addToOrderedProducts(cart)
    setTimeout(() => clearCart(), 3000);
  };
  return (
    <Flex flexDirection="column" className="cart-summary">
      <Flex flexDirection="column" className="cart-summary__content">
        <Flex className="cart-summary__row" justifyContent="space-between">
          <p>Cart items, {cart.length} pc(s)</p>
          <p>{getSumWithoutDiscounts()}</p>
        </Flex>
        <Flex className="cart-summary__row" justifyContent="space-between">
          <p>Your discount</p>
          <p>{-(+getSumWithoutDiscounts() - +getSum()).toFixed(2)}</p>
        </Flex>
        <Flex className="cart-summary__row" justifyContent="space-between">
          <h3>Total</h3>
          <h3>{getSum()}</h3>
        </Flex>
        <Button
          onClickAction={() =>
            isAuth
              ? placeAnOrder()
              : toggleNotify(
                  "warning",
                  "You must log in or register to place an order."
                )
          }
          styleGuide="wb"
        >
          Place an order
        </Button>
      </Flex>
      <Notify
        ref={notifyRef}
        notifyVisibility={isNotifyShowed}
        notifyType={notifyType}
        notifyText={notifyText}
      />
    </Flex>
  );
};
