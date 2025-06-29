import { ReactElement } from "react";
import { useSearchParams } from "react-router";
import "./style.scss";

export const ProductInfo = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  console.log(productId);
  return <div>Product Info</div>;
};
