import { ReactElement } from "react";
import { Grid } from "@components/ui/Grid";
import { useApi } from "@hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { IProductsResponse } from "@/types/Products";
import { Loader } from "@components/Loader";
import { ProductBadge } from "@components/ProductBadge";
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
        <ProductBadge
          key={product.id}
          id={product.id}
          images={product.images}
          title={product.title}
          price={product.price}
          discountPercentage={product.discountPercentage}
          rating={product.rating}
        />
      ))}
    </Grid>
  );
};
