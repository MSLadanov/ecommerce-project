import { UserInfo } from "@components/UserInfo/UserInfo";
import { AllUserCarts } from "@components/AllUserCarts";
import { ReactElement } from "react";
import { CollapseBox } from "@components/ui/CollapseBox";

export const UserPage = (): ReactElement => {
  return (
    <main>
      <UserInfo />
      <AllUserCarts />
      <CollapseBox title="Addresses">Addresses</CollapseBox>
      <CollapseBox title="Payment Methods">Payment Methods</CollapseBox>
      <CollapseBox title="Returns & Refunds">Returns & Refunds</CollapseBox>
      <CollapseBox title="Wishlist">Wishlist</CollapseBox>
      <CollapseBox title="Recently Viewed">Recently Viewed</CollapseBox>
    </main>
  );
};
