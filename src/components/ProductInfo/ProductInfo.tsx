import { ReactElement, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "@hooks/useApi";
import { IProduct } from "@/types/Products";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

export const ProductInfo = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const { get } = useApi();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["product"],
    queryFn: () => get<IProduct>("PRODUCTS", `/${productId}`),
  });
  console.log(data);
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
    <Flex className="product-info">
      <Flex className="product-info__details">
        <Flex className="product-info__images"></Flex>
        <Flex className="product-info__description"></Flex>
      </Flex>
      <Flex className="product-info__reviews"></Flex>
    </Flex>
  );
};
