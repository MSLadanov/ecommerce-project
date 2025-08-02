import { useNotify } from "@/hooks/useNotify";
import { useWishlist } from "@/hooks/useWishlist";
import { IProduct } from "@/types/Products";
import { ReactElement, useState } from "react";
import { Flex } from "@components/ui/Flex";
import { Notify } from "@components/ui/Notify";
import { WishlistButton } from "@components/WishlistButton";

export const ProductImages: React.FC<{ data: IProduct; isAuth: boolean }> = ({
  data,
  isAuth,
}): ReactElement => {
  const { toggleWishlist } = useWishlist((state) => state);
  const { notifyRef, isNotifyShowed, notifyType, notifyText, toggleNotify } =
    useNotify({ delay: 3000 });
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
      <Notify
        ref={notifyRef}
        notifyVisibility={isNotifyShowed}
        notifyType={notifyType}
        notifyText={notifyText}
      />
    </Flex>
  );
};