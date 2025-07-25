import { ReactElement } from "react";
import { Grid } from "@components/ui/Grid";
import { useApi } from "@hooks/useApi";
import { ICategoriesResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import { CategoryButton } from "@components/CategoryButton";
import { Loader } from "@components/Loader";
import { LuReplyAll } from "react-icons/lu";
import "./style.scss";

export const ProductCategories = (): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => get<ICategoriesResponse>("CATEGORIES"),
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Grid size="xs" className={"categories"}>
      <a className="category__button" href={`products`}>
      <div className="category__button__image">
        <LuReplyAll size={'2rem'} />
      </div>
      <div className="category__button__title">
        All
      </div>
    </a>
      {data.map((category, index) => (
        <CategoryButton key={index} category={category} />
      ))}
    </Grid>
  );
};
