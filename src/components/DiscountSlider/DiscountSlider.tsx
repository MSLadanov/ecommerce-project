import { ReactElement } from "react";
import { Slider } from "@components/ui/Slider";
import { useApi } from "@hooks/useApi";
import { IProductsResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "@components/ui/Flex";
import { Loader } from "@components/Loader";
import { MostRated } from "@components/MostRated";
import "./style.scss";

export const DiscountSlider = (): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sale-products"],
    queryFn: () =>
      get<IProductsResponse>(
        "PRODUCTS",
        "?limit=10&sortBy=discountPercentage&order=desc"
      ),
  });
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Flex className="discount-slider" justifyContent="space-between">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Slider
            autoSlide={true}
            withControls={false}
            slidesData={data.products}
          ></Slider>
          <MostRated />
        </>
      )}
    </Flex>
  );
};
