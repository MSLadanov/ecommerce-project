import { UserInfo } from "@components/UserInfo/UserInfo";
import { AllUserCarts } from "@components/AllUserCarts";
import { ReactElement } from "react";
import { CollapseBox } from "@components/ui/CollapseBox";
import { CartItem } from "@components/CartItem";
import { useWishlist } from "@/hooks/useWishlist";
import { IProduct } from "@/types/Products";
import { Grid } from "@/components/ui/Grid";
import { EmptyWishlist } from "@components/EmptyWishlist";
import { useAuth } from "@hooks/useAuth";
import { Loader } from "@components/Loader";

export const UserPage = (): ReactElement => {
  const { wishlist } = useWishlist((state) => state);
  const { userData, isLoading, isError } = useAuth();
  if (isError) {
    return <div>{isError}</div>;
  }
  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UserInfo userData={userData} />
          <Grid size="md">
            <AllUserCarts userData={userData} />
            <CollapseBox title="Addresses">Addresses</CollapseBox>
            <CollapseBox title="Payment Methods">Payment Methods</CollapseBox>
            <CollapseBox title="Returns & Refunds">
              Returns & Refunds
            </CollapseBox>
            <CollapseBox title="Wishlist">
              {wishlist.length === 0 && <EmptyWishlist />}
              {wishlist.map((item: IProduct) => (
                <CartItem
                  product={item}
                  isCurrentCart={false}
                  isWishlist={true}
                />
              ))}
            </CollapseBox>
            <CollapseBox title="Recently Viewed">Recently Viewed</CollapseBox>
          </Grid>
        </>
      )}
    </main>
  );
};
