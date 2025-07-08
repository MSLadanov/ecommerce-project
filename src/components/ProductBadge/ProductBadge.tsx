import { IProduct } from "@/types/Products";
import { ReactElement } from "react";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { Flex } from "@components/ui/Flex";
import './style.scss'

export const ProductBadge: React.FC<Partial<IProduct>> = ({
  id,
  images,
  brand,
  title,
  price,
  rating,
}): ReactElement => {
  return (
    <Flex
      className="most-rated-card"
      flexDirection="row"
      alignItems="align-center"
    >
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
        </Flex>
        <Flex className="most-rated-card__rating" alignItems="align-center">
          <FaStar color="yellow" />
          <p>{rating}</p>
        </Flex>
      </div>
    </Flex>
  );
};
