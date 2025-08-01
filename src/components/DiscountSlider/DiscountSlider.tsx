import { ReactElement } from "react";
import { Slider } from "@components/ui/Slider";
import { Slide } from "@components/ui/Slider/Slide";
import { useApi } from "@hooks/useApi";
import { IProductsResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "@components/ui/Flex";
import { Loader } from "@components/Loader";
import { MostRated } from "@components/MostRated";
import { useSlider } from "@/hooks/useSlider";
import "./style.scss";

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
  console.log(currentSlide)
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
        <Loader />
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
                <p>Hello</p>
              </Slide>
            ))}
          </Slider>
          <MostRated />
        </>
      )}
    </Flex>
  );
};
