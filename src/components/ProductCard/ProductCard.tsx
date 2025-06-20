import { IProduct } from "@/types/Products";
import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

export const ProductCard: React.FC<{ data: IProduct }> = ({
  data,
}): ReactElement => {
  return (
    <div className="product-card">
      <Flex flexDirection="row" justifyContent="space-between">
        <div className="product-card__category">
        <p>{data.category}</p>
      </div>
        <div className="product-card__rate">
          <p>{data.rating}</p>
        </div>
      </Flex>
      
      <div className="product-card__title">
        <p>{data.title}</p>
      </div>
      <div className="product-card__image">
        <img src={data.images[0]} alt={data.title + " image"} />
      </div>
    </div>
  );
};
