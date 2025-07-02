import { ReactElement, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "@hooks/useApi";
import { IProduct } from "@/types/Products";
import { Flex } from "@components/ui/Flex";
import { ProductReview } from "@components/ProductReview";
import { FaShoppingCart } from "react-icons/fa";
import { AddToCartButton } from "@components/AddToCartButton";
import { Button } from "@components/ui/Button";
import "./style.scss";

export const ProductInfo = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const { get } = useApi();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["product"],
    queryFn: () => get<IProduct>("PRODUCTS", `/${productId}`),
  });
  useEffect(() => {
    refetch();
  }, [refetch, searchParams]);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Flex className="product-info" flexDirection="column">
      <Flex className="product-info__details">
        <Flex className="product-info__images">
          <img src={data.images[0]} alt={`${data.title} image`} />
        </Flex>
        <Flex
          className="product-info__description"
          flexDirection="column"
          justifyContent="center"
        >
          <h1>{data.brand}</h1>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <AddToCartButton productData={data}>
            <Button styleGuide="ozon">
              <FaShoppingCart />
              {data.availabilityStatus}
            </Button>
          </AddToCartButton>
          {Object.entries(data.dimensions).map((item, index) => (
            <Flex
              key={index}
              className="product-info__properties"
              justifyContent="space-between"
            >
              <h3>{item[0]}</h3>
              <h3>{item[1]}</h3>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex className="product-info__reviews" flexDirection="column">
        {data.reviews.map((review, index) => (
          <ProductReview review={review} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};
