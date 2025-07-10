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
import "./style.scss";

const ProductImages: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}): ReactElement => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <Flex className="product-info__images">
      <Flex className="product-info__images__controls" flexDirection="column">
        {images.map((image) => (
          <img
            src={image}
            title={title}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </Flex>
      <Flex className="product-info__images__main">
        <img src={currentImage} alt={`${title} image`} />
      </Flex>
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
        <ProductImages images={data.images} title={data.title} />
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
            <Button styleGuide="ozon" onClickAction={() => addToCart(data)}>
              <FaShoppingCart />
              {data.availabilityStatus}
            </Button>
          </AddToCartButton>
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
