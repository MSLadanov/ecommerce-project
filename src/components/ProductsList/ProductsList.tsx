import { IProduct, IProductsResponse } from "@/types/Products";
import { useApi } from "@hooks/useApi";
import { useQuery } from "@tanstack/react-query";
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
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      get<IProductsResponse>(
        "PRODUCTS",
        category ? `/category/${category}` : ""
      ),
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
      <Sort />
      <Grid className="product-list" size="xs">
        {data.products.map((product: IProduct) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </Grid>
    </>
  );
};
