import { ReactElement } from "react";
import { Grid } from "@components/ui/Grid";
import { useApi } from "@hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { IProductsResponse } from "@/types/Products";
import { Loader } from "@components/Loader";
import { FaDollarSign } from "react-icons/fa";
import { IProduct } from "@/types/Products";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

const MostRatedCard: React.FC<Partial<IProduct>> = ({
  id,
  images,
  brand,
  title,
  price,
  discountPercentage,
}): ReactElement => {
  return (
    <Flex className="most-rated-card" flexDirection="row" alignItems="align-center">
      <a href={`/product?id=${id}`}>
        <Flex className="most-rated-card__image" alignItems="align-center">
          <img src={images[0]} alt={title + " image"} />
        </Flex>
      </a>
      <div className="most-rated-card__info">
        <h3>{brand}</h3>
        <h4>{title}</h4>
        <Flex className="most-rated-card__price">
          <h1>
            {price} <FaDollarSign />
          </h1>
          <h2>
            {Math.round(price / (1 - discountPercentage / 100))}{" "}
            <FaDollarSign />
          </h2>
        </Flex>
      </div>
    </Flex>
  );
};

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
        <MostRatedCard
          key={product.id}
          id={product.id}
          images={product.images}
          title={product.title}
          price={product.price}
          discountPercentage={product.discountPercentage}
        />
      ))}
    </Grid>
  );
};
