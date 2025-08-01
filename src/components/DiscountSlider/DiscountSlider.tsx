import { ReactElement } from "react";
import { Slider } from "@components/ui/Slider";
import { Slide } from "@components/ui/Slider/Slide";
import { useApi } from "@hooks/useApi";
import { IProduct, IProductsResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "@components/ui/Flex";
import { Loader } from "@components/Loader";
import { MostRated } from "@components/MostRated";
import { useSlider } from "@hooks/useSlider";
import { FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router";
import "./style.scss";

const DiscountSliderBadge = ({
  product,
}: {
  product: IProduct;
}): ReactElement => {
  const navigate = useNavigate();
  return (
    <div
      className="discount-slider__badge"
      onClick={() => navigate(`/product?id=${product.id}`)}
    >
      <h3>{product.brand}</h3>
      <h4>{product.title}</h4>
      <Flex className="product-card__price">
        <h1>
          {product.price} <FaDollarSign />
        </h1>
        <h2>
          {Math.round(product.price / (1 - product.discountPercentage / 100))}{" "}
          <FaDollarSign />
        </h2>
      </Flex>
    </div>
  );
};

export const DiscountSlider = (): ReactElement => {
  const slidesCount = 10;
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sale-products"],
    queryFn: () =>
      get<IProductsResponse>(
        "PRODUCTS",
        `?limit=${slidesCount}&sortBy=discountPercentage&order=desc`
      ),
  });
  const { currentSlide, nextSlide, prevSlide } = useSlider({
    slidesCount: slidesCount,
    options: {
      autoScroll: true,
      delay: 3000,
    },
  });
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Flex
      className="discount-slider"
      justifyContent="space-between"
      flexDirection="row"
    >
      {isLoading ? (
        <Loader color="gray" secondaryColor="white" />
      ) : (
        <>
          <Slider
            withControls={false}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          >
            {data.products.map((product, index) => (
              <Slide
                key={product.id}
                isActive={currentSlide === index}
                imageUrl={product.images[0]}
              >
                <DiscountSliderBadge product={product} />
              </Slide>
            ))}
          </Slider>
          <MostRated />
        </>
      )}
    </Flex>
  );
};
