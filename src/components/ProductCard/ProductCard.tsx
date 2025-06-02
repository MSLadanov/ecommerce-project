import { TProduct } from "@/types/Products";
import { ReactElement } from "react";

export const ProductCard: React.FC<{ data: TProduct }> = ({
  data,
}): ReactElement => {
  console.log(data);
  return <div>ProductCard</div>;
};
