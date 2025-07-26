import { ReactElement } from "react";
import { Button } from "@components/ui/Button";
import { Flex } from "@components/ui/Flex";
import { useFavourites } from "@hooks/useFavourites";
import { IProduct } from "@/types/Products";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./style.scss";

interface IFavouriteButtonProps {
  product: IProduct;
}

export const FavouriteButton: React.FC<IFavouriteButtonProps> = ({
  product,
}): ReactElement => {
  const { toggleFavourite, isInFavourites } = useFavourites((state) => state);
  return (
    <Flex className="fav-button-container">
      <Button onClickAction={() => toggleFavourite(product)}>
        {isInFavourites(product.id) ? (
          <FaHeart color="red" size={"2rem"} />
        ) : (
          <FaRegHeart size={"2rem"} color="black" />
        )}
      </Button>
    </Flex>
  );
};
