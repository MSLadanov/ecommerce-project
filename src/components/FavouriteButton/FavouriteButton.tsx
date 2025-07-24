import { ReactElement } from "react";
import { Button } from "@components/ui/Button";
import { Flex } from "@components/ui/Flex";
import { useFavourites } from "@hooks/useFavourites";
import { IProduct } from "@/types/Products";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNotify } from "@hooks/useNotify";
import { Notify } from "@components/ui/Notify";
import "./style.scss";

interface IFavouriteButtonProps {
  product: IProduct;
  isAuth: boolean;
}

export const FavouriteButton: React.FC<IFavouriteButtonProps> = ({
  product,
  isAuth,
}): ReactElement => {
  const { toggleFavourite, isInFavourites } = useFavourites((state) => state);
  const { notifyRef, isNotifyShowed, notifyType, notifyText, toggleNotify } =
    useNotify({ delay: 3000 });
  return (
    <Flex className="fav-button-container">
      <Button
        onClickAction={
          isAuth
            ? () => toggleFavourite(product)
            : () => toggleNotify("warning", "You must be logged in to add a product to your favorites")
        }
      >
        {isInFavourites(product.id) ? (
          <FaHeart color="red" size={"2rem"} />
        ) : (
          <FaRegHeart size={"2rem"} color="black" />
        )}
      </Button>
      <Notify
        ref={notifyRef}
        notifyVisibility={isNotifyShowed}
        notifyType={notifyType}
        notifyText={notifyText}
      />
    </Flex>
  );
};
