import { IProduct } from "@/types/Products";
import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import {
  FaCommentDollar,
  FaDollarSign,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { Button } from "../ui/Button";
import "./style.scss";

export const ProductCard: React.FC<{ data: IProduct }> = ({
  data,
}): ReactElement => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={data.images[0]} alt={data.title + " image"} />
      </div>
      <div className="product-card__price">
        <h3>
          {data.price} <FaDollarSign />
        </h3>
        <h4>
          {Math.round(data.price / (1 - data.discountPercentage / 100))}{" "}
          <FaDollarSign />
        </h4>
      </div>
      <div className="product-card__title">
        <p>{data.title}</p>
      </div>
      <Flex flexDirection="row" justifyContent="space-between">
        <div className="product-card__rate">
          <FaStar />
          <p>{data.rating}</p>
        </div>
        <div className="product-card__reviews">
          <FaCommentDollar />
          <p>{data.reviews.length} reviews</p>
        </div>
      </Flex>
      <Button styleGuide="ozon">
        <FaShoppingCart />
        {data.availabilityStatus}
      </Button>
    </div>
  );
};
