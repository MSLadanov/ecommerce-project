import { IProduct, IProductsResponse } from "@/types/Products";
import { useApi } from "@hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { ReactElement, useContext, useEffect } from "react";
import { ProductCard } from "@components/ProductCard";
import { Grid } from "@components/ui/Grid/Grid";
import { useSearchParams } from "react-router";
import { Loader } from "@components/Loader";
import { Sort } from "@components/Sort";
import { useAuth } from "@hooks/useAuth";
import { useWishlist } from "@/hooks/useWishlist";
import { Error } from "../Error";
import { NotifyContext } from "@/contexts/NotifyContext";
import "./style.scss";

export const ProductsList = (): ReactElement => {
  const { get } = useApi();
  const { toggleNotify } = useContext(NotifyContext);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  const { isAuth } = useAuth();
  const { toggleWishlist } = useWishlist((state) => state);
  const addToWishlist = (product: IProduct) => {
    if (isAuth) {
      toggleWishlist(product);
    } else {
      toggleNotify(
        "warning",
        "You must be logged in to add a product to your wishlist."
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
  if (isError) {
    return (
      <div>
        <Error />
      </div>
    );
  }
  return (
    <div className="products-list">
      <Sort />
      {isLoading ? (
        <Loader />
      ) : (
        <Grid className="product-list" size="xs">
          {data.products.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              data={product}
              addToWishlist={addToWishlist}
            />
          ))}
        </Grid>
      )}
    </div>
  );
};
