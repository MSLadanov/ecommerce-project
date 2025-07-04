import { ReactElement } from "react";
import { useApi } from "@/hooks/useApi";
import { IProductsResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import "./style.scss";

export const CategoryButton: React.FC<{ category: string }> = ({
  category,
}): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: [category],
    queryFn: () =>
      get<IProductsResponse>("PRODUCTS_BY_CATEGORY", `/${category}?limit=1`),
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <a className="category__button" href={`products?category=${category}`}>
      <div className="category__button__image">
        <img src={data.products[0].images[0]} alt={`${category} image`} />
      </div>
      <div className="category__button__title">
        <h3>{category.split("-").join(" ")}</h3>
      </div>
    </a>
  );
};
