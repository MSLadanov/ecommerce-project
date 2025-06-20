import { IProduct, IProductsResponse } from "@/types/Products";
import { useApi } from "@hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";
import { ProductCard } from "@components/ProductCard";
import { Grid } from "../ui/Grid/Grid";

export const ProductsList = (): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => get<IProductsResponse>("PRODUCTS"),
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Grid size="xs">
      {data.products.map((product: IProduct) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </Grid>
  );
};
