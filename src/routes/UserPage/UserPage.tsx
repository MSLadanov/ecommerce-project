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
import { useOrderedProducts } from "@hooks/useOrderedProducts";
import { EmptyOrders } from "@components/EmptyOrders";

export const UserPage = (): ReactElement => {
  const { wishlist } = useWishlist((state) => state);
  const {orderedProducts} = useOrderedProducts((state) => state)
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
            <CollapseBox title="Current Orders">
              {orderedProducts.length === 0 && <EmptyOrders />}
              {orderedProducts.map((item: IProduct) => (
                <CartItem
                  product={item}
                  cartItemType='current-order'
                />
              ))}
            </CollapseBox>
            <AllUserCarts userData={userData} />
            <CollapseBox title="Addresses">Addresses</CollapseBox>
            <CollapseBox title="Payment Methods">Payment Methods</CollapseBox>
            <CollapseBox title="Wishlist">
              {wishlist.length === 0 && <EmptyWishlist />}
              {wishlist.map((item: IProduct) => (
                <CartItem
                  product={item}
                  cartItemType="wishlist-cart"
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
