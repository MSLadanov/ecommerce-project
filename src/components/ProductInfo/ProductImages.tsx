import { useWishlist } from "@/hooks/useWishlist";
import { IProduct } from "@/types/Products";
import { ReactElement, useContext, useState } from "react";
import { Flex } from "@components/ui/Flex";
import { WishlistButton } from "@components/WishlistButton";
import { NotifyContext } from "@/contexts/NotifyContext";

export const ProductImages: React.FC<{ data: IProduct; isAuth: boolean }> = ({
  data,
  isAuth,
}): ReactElement => {
  const { toggleNotify } = useContext(NotifyContext);
  const { toggleWishlist } = useWishlist((state) => state);
  const [currentImage, setCurrentImage] = useState(data.images[0]);
  const addToWishlist = (product: IProduct) => {
    if (isAuth) {
      toggleWishlist(product);
    } else {
      toggleNotify(
        "warning",
        "You must be logged in to add a product to your wishlist."
      );
    }
  };
  return (
    <Flex className="product-info__images">
      <Flex className="product-info__images__controls" flexDirection="column">
        {data.images.map((image, index) => (
          <img
            key={index}
            src={image}
            title={data.title}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </Flex>
      <Flex className="product-info__images__main" justifyContent="center">
        <div className="product-info__images__wrapper">
          <WishlistButton product={data} addToWishlist={addToWishlist} />
          <img src={currentImage} alt={`${data.title} image`} />
        </div>
      </Flex>
    </Flex>
  );
};
