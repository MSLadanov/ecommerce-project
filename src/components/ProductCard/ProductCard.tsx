import { TProduct } from "@/types/Products";
import { ReactElement } from "react";
import "./style.scss";

export const ProductCard: React.FC<{ data: TProduct }> = ({
  data,
}): ReactElement => {
  return (
    <div className="product-card">
      <div className="product-card__title">
        <p>{data.title}</p>
      </div>
      <div className="product-card__image">
        <img src={data.image} alt={data.title + " image"} />
      </div>
    </div>
  );
};
