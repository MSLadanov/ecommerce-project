import { ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "@hooks/useApi";
import { IProduct } from "@/types/Products";
import { Flex } from "@components/ui/Flex";
import { ProductReview } from "@components/ProductReview";
import { FaDollarSign, FaShoppingCart, FaStar } from "react-icons/fa";
import { AddToCartButton } from "@components/AddToCartButton";
import { Button } from "@components/ui/Button";
import { useCart } from "@hooks/useCart";
import { Grid } from "@components/ui/Grid";
import { Loader } from "@components/Loader";
import { WishlistButton } from "@/components/WishlistButton";
import { useAuth } from "@hooks/useAuth";
import { useWishlist } from "@/hooks/useWishlist";
import { useNotify } from "@hooks/useNotify";
import { Notify } from "@components/ui/Notify";
import "./style.scss";

const ProductImages: React.FC<{ data: IProduct }> = ({
  data,
}): ReactElement => {
  const { isAuth } = useAuth();
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
        <WishlistButton product={data} addToWishlist={addToWishlist} />
        <img src={currentImage} alt={`${data.title} image`} />
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

export const ProductInfo = (): ReactElement => {
  const { addToCart } = useCart((state) => state);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const { get } = useApi();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["product"],
    queryFn: () => get<IProduct>("PRODUCTS", `/${productId}`),
  });

  useEffect(() => {
    refetch();
  }, [refetch, searchParams]);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Flex className="product-info" flexDirection="column">
      <Flex className="product-info__details">
        <ProductImages data={data} />
        <Flex
          className="product-info__description"
          flexDirection="column"
          justifyContent="center"
        >
          <h1>{data.brand}</h1>
          <h2>{data.title}</h2>
          <Flex className="product-card__price">
            <h3>
              {data.price} <FaDollarSign />
            </h3>
            <h4>
              {Math.round(data.price / (1 - data.discountPercentage / 100))}{" "}
              <FaDollarSign />
            </h4>
          </Flex>
          <h3>
            <FaStar />
            {data.rating}
          </h3>
          <p>{data.description}</p>
          <AddToCartButton productData={data}>
            <Button
              styleGuide="ozon"
              disabled={data.availabilityStatus === "Out of Stock"}
              onClickAction={() => addToCart(data)}
            >
              <FaShoppingCart />
              {data.availabilityStatus}
            </Button>
          </AddToCartButton>
          <Grid size="md">
            <Flex
              className="product-info__properties"
              justifyContent="space-between"
            >
              <h3>SKU</h3>
              <h3>{data.sku}</h3>
            </Flex>
            {Object.entries(data.dimensions).map((item, index) => (
              <Flex
                key={index}
                className="product-info__properties"
                justifyContent="space-between"
              >
                <h3>{item[0]}</h3>
                <h3>{item[1]}</h3>
              </Flex>
            ))}
            <Flex
              className="product-info__properties"
              justifyContent="space-between"
            >
              <h3>warranty</h3>
              <h3>{data.warrantyInformation}</h3>
            </Flex>
            <Flex
              className="product-info__properties"
              justifyContent="space-between"
            >
              <h3>shipping</h3>
              <h3>{data.shippingInformation}</h3>
            </Flex>
            <Flex
              className="product-info__properties"
              justifyContent="space-between"
            >
              <h3>return</h3>
              <h3>{data.returnPolicy}</h3>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
      <Grid className="product-info__reviews" size="md">
        {data.reviews.map((review, index) => (
          <ProductReview review={review} key={index} />
        ))}
      </Grid>
    </Flex>
  );
};
