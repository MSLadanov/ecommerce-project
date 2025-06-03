import { TProduct } from "@/types/Products";
import { ReactElement } from "react";

export const ProductCard: React.FC<{ data: TProduct }> = ({
  data,
}): ReactElement => {
  return (
    <div>
      <p>{data.title}</p>
      <img
        src={data.image}
        alt={data.title + " image"}
        width={100}
        height={100}
      />
    </div>
  );
};
