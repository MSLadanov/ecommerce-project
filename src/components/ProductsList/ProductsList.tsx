import { IProduct, IProductsResponse } from "@/types/Products";
import { useApi } from "@hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { ReactElement, useEffect } from "react";
import { ProductCard } from "@components/ProductCard";
import { Grid } from "@components/ui/Grid/Grid";
import { useSearchParams } from "react-router";
import { Loader } from "@components/Loader";
import { Sort } from "@components/Sort";
import { useAuth } from "@hooks/useAuth";
import { useWishlist } from "@/hooks/useWishlist";
import { Notify } from "@components/ui/Notify";
import { useNotify } from "@/hooks/useNotify";

export const ProductsList = (): ReactElement => {
  const { get } = useApi();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  const { isAuth } = useAuth();
  const { toggleWishlist } = useWishlist((state) => state);
  const { notifyRef, isNotifyShowed, notifyType, notifyText, toggleNotify } =
    useNotify({ delay: 3000 });
  const addToWishlist = (product: IProduct) => {
    if (isAuth) {
      toggleWishlist(product);
    } else {
      toggleNotify(
        "warning",
        "You must be logged in to add a product to your favorites."
      );
    }
  };
  const queryParam = category
    ? sortBy
      ? `/category/${category}?sortBy=${sortBy}&order=${order}`
      : `/category/${category}`
    : sortBy
    ? `?sortBy=${sortBy}&order=${order}`
    : "";
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () => get<IProductsResponse>("PRODUCTS", queryParam),
  });
  useEffect(() => {
    refetch();
  }, [refetch, searchParams, sortBy, order]);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <Sort />
      <Grid className="product-list" size="xs">
        {data.products.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            data={product}
            addToWishlist={addToWishlist}
          />
        ))}
      </Grid>
      <Notify
        ref={notifyRef}
        notifyVisibility={isNotifyShowed}
        notifyType={notifyType}
        notifyText={notifyText}
      />
    </>
  );
};
