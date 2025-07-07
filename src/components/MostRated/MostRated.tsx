import { ReactElement } from "react";
import { Grid } from "@components/ui/Grid";
import { useApi } from "@hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { IProductsResponse } from "@/types/Products";
import { Loader } from "@components/Loader";
import "./style.scss";

export const MostRated = (): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["rated-products"],
    queryFn: () =>
      get<IProductsResponse>("PRODUCTS", "?limit=4&sortBy=rating&order=desc"),
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Grid size="xs" className="most-rated">
      {data.products.map((product) => (
        <div>{product.title}</div>
      ))}
    </Grid>
  );
};
