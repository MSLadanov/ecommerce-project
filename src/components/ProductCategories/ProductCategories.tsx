import { ReactElement } from "react";
import { Grid } from "@components/ui/Grid";
import { useApi } from "@hooks/useApi";
import { ICategoriesResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import { CategoryButton } from "@components/CategoryButton";
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
    <Grid size="xs" className={'categories'}>
      {data.map((category, index) => (
        <CategoryButton key={index} category={category} />
      ))}
    </Grid>
  );
};
