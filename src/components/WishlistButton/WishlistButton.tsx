import { ReactElement } from "react";
import { Button } from "@components/ui/Button";
import { Flex } from "@components/ui/Flex";
import { useWishlist } from "@/hooks/useWishlist";
import { IProduct } from "@/types/Products";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./style.scss";

interface IWishlistButtonProps {
  product: IProduct;
  addToWishlist: (product: IProduct) => void
}

export const WishlistButton: React.FC<IWishlistButtonProps> = ({
  product,
  addToWishlist
}): ReactElement => {
  const { isInWishlist } = useWishlist((state) => state);
  return (
    <Flex className="fav-button-container">
      <Button onClickAction={() => addToWishlist(product)}>
        {isInWishlist(product.id) ? (
          <FaHeart color="red" size={"2rem"} />
        ) : (
          <FaRegHeart size={"2rem"} color="black" />
        )}
      </Button>
    </Flex>
  );
};
