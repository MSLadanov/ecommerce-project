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
import { useAuth } from "@hooks/useAuth";
import { RateProduct } from "@components/RateProduct";
import { ProductImages } from "./ProductImages";
import "./style.scss";

export const ProductInfo = (): ReactElement => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { addToCart } = useCart((state) => state);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const { isAuth, userData } = useAuth();
  const { get } = useApi();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["product"],
    queryFn: () => get<IProduct>("PRODUCTS", `/${productId}`),
  });
  const rate = () => {
    const newComment = {
      rating,
      comment,
      reviewerEmail: userData.email,
      reviewerName: `${userData.firstName} ${userData.lastName}`,
      date: new Date(Date.now()).toISOString(),
    };
    console.log([newComment, ...data.reviews]);
  };
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
        <ProductImages data={data} isAuth={isAuth} />
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
        {isAuth && (
          <RateProduct
            rating={rating}
            comment={comment}
            setRating={setRating}
            setComment={setComment}
            rateProduct={rate}
          />
        )}
        {data.reviews.map((review, index) => (
          <ProductReview review={review} key={index} />
        ))}
      </Grid>
    </Flex>
  );
};
