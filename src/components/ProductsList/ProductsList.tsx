import { IProduct, IProductsResponse } from "@/types/Products";
import { useApi } from "@hooks/useApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ReactElement, useEffect } from "react";
import { ProductCard } from "@components/ProductCard";
import { Grid } from "@components/ui/Grid/Grid";
import { useSearchParams } from "react-router";
import { Loader } from "@components/Loader";
import { Sort } from "@components/Sort";

export const ProductsList = (): ReactElement => {
  const { get } = useApi();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
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
  const { mutate } = useMutation({
    mutationKey: ["products"],
    mutationFn: () => get<IProductsResponse>("PRODUCTS", queryParam),
  });
  useEffect(() => {
    refetch();
  }, [refetch, searchParams]);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <Sort sortFn={mutate} />
      <Grid className="product-list" size="xs">
        {data.products.map((product: IProduct) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </Grid>
    </>
  );
};
