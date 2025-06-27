import { ReactElement } from "react";
import { Grid } from "@components/ui/Grid";
import { Link } from "react-router";
import { useApi } from "@hooks/useApi";
import { ICategoriesResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import "./style.scss";

export const ProductCategories = (): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => get<ICategoriesResponse>("CATEGORIES"),
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Grid size="xs">
      {data.map((category, index) => (
        <Link key={index} to={`?category?=${category}`}>
          {category}
        </Link>
      ))}
    </Grid>
  );
};
