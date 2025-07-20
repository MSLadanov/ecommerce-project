import { IProduct } from "@/types/Products";
import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import {
  FaCommentDots,
  FaDollarSign,
  FaShoppingCart,
  FaStar,
  FaRegHeart,
} from "react-icons/fa";
import { Button } from "@components/ui/Button";
import { AddToCartButton } from "@components/AddToCartButton";
import { useCart } from "@hooks/useCart";
import "./style.scss";

export const ProductCard: React.FC<{ data: IProduct }> = ({
  data,
}): ReactElement => {
  const { addToCart } = useCart((state) => state);
  return (
    <Flex
      className={
        data.availabilityStatus === "Out of Stock"
          ? "product-card out-of-stock"
          : "product-card"
      }
      flexDirection="column"
      justifyContent="space-between"
    >
      <div className="product-card__fav-button">
        <FaRegHeart size={"2rem"} />
      </div>
      <a href={`/product?id=${data.id}`}>
        <Flex className="product-card__image" alignItems="align-center">
          <img src={data.images[0]} alt={data.title + " image"} />
        </Flex>
      </a>
      <Flex className="product-card__price">
        <h3>
          {data.price} <FaDollarSign />
        </h3>
        <h4>
          {Math.round(data.price / (1 - data.discountPercentage / 100))}{" "}
          <FaDollarSign />
        </h4>
      </Flex>
      <Flex className="product-card__title" flexDirection="column">
        <h3>{data.brand}</h3>
        <p>{data.title}</p>
      </Flex>
      <Flex flexDirection="row">
        <Flex className="product-card__rate">
          <FaStar />
          <p>{data.rating}</p>
        </Flex>
        <Flex className="product-card__reviews">
          <FaCommentDots />
          <p>{data.reviews.length} reviews</p>
        </Flex>
      </Flex>
      <AddToCartButton productData={data}>
        <Button styleGuide="ozon" onClickAction={() => addToCart(data)}>
          <FaShoppingCart />
          {data.availabilityStatus}
        </Button>
      </AddToCartButton>
    </Flex>
  );
};
