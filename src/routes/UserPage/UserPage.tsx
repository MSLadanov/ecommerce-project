import { UserInfo } from "@components/UserInfo/UserInfo";
import { AllUserCarts } from "@components/AllUserCarts";
import { ReactElement } from "react";
import { CollapseBox } from "@components/ui/CollapseBox";
import { CartItem } from "@components/CartItem";
import { useWishlist } from "@/hooks/useWishlist";
import { IProduct } from "@/types/Products";

export const UserPage = (): ReactElement => {
  const { wishlist } = useWishlist((state) => state);
  return (
    <main>
      <UserInfo />
      <AllUserCarts />
      <CollapseBox title="Addresses">Addresses</CollapseBox>
      <CollapseBox title="Payment Methods">Payment Methods</CollapseBox>
      <CollapseBox title="Returns & Refunds">Returns & Refunds</CollapseBox>
      <CollapseBox title="Wishlist">
        {wishlist.map((item: IProduct) => (
          <CartItem product={item} isCurrentCart={false} />
        ))}
      </CollapseBox>
      <CollapseBox title="Recently Viewed">Recently Viewed</CollapseBox>
    </main>
  );
};
