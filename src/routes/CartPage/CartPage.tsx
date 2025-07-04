import { AllUserCarts } from "@components/AllUserCarts";
import { CurrentCart } from "@components/CurrentCart";
import { ReactElement } from "react";

export const CartPage = (): ReactElement => {
  return (
    <main>
      <CurrentCart />
      <AllUserCarts />
    </main>
  );
};
