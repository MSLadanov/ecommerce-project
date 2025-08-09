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
import { useRecentlyViewed } from "@hooks/useRecentlyViewed";
import { EmptyOrders } from "@components/EmptyOrders";
import { UserInfoText } from "@components/UserInfoText";

export const UserPage = (): ReactElement => {
  const { wishlist } = useWishlist((state) => state);
  const { orderedProducts } = useOrderedProducts((state) => state);
  const { recentlyViewed } = useRecentlyViewed((state) => state);
  const { userData, isLoading, isError } = useAuth();
  if (isError) {
    return <div>{isError}</div>;
  }
  console.log(isError)
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
                <CartItem product={item} cartItemType="current-order" />
              ))}
            </CollapseBox>
            <AllUserCarts userData={userData} />
            <CollapseBox title="Addresses">
              <UserInfoText title="Country" info={userData?.address?.country} />
              <UserInfoText title="City" info={userData?.address?.city} />
              <UserInfoText title="Address" info={userData?.address?.address} />
            </CollapseBox>
            <CollapseBox title="Payment Methods">
              <UserInfoText title="Card type" info={userData?.bank.cardType} />
              <UserInfoText
                title="Card number"
                info={userData?.bank.cardNumber}
              />
              <UserInfoText
                title="Card expire"
                info={userData?.bank.cardExpire}
              />
            </CollapseBox>
            <CollapseBox title="Wishlist">
              {wishlist.length === 0 && <EmptyWishlist />}
              {wishlist.map((item: IProduct) => (
                <CartItem product={item} cartItemType="wishlist-cart" />
              ))}
            </CollapseBox>
            {recentlyViewed.length !==0 && (
              <CollapseBox title="Recently Viewed">
                {recentlyViewed.map((item) => (
                  <CartItem product={item} cartItemType="order-history" />
                ))}
              </CollapseBox>
            )}
          </Grid>
        </>
      )}
    </main>
  );
};
