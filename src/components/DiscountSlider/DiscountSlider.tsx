import { ReactElement } from "react";
import { Slider } from "@components/ui/Slider";
import { useApi } from "@hooks/useApi";
import { IProduct, IProductsResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import { Slide } from "../ui/Slide";
import { Flex } from "../ui/Flex";
import { FaDollarSign } from "react-icons/fa";
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
  if (isLoading ) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Flex className="discount-slider" justifyContent="space-between">
      <Slider autoSlide withControls={false}>
        {data.products.map((product: IProduct) => (
          <a className="discount-slider__link" key={product.id} href={`/product?id=${product.id}`}>
            <Slide key={product.id} image={product.images[0]}>
              <div className="discount__info">
                <h3>{product.brand}</h3>
                <h4>{product.title}</h4>
                <Flex className="product-card__price">
                  <h1>
                    {product.price} <FaDollarSign />
                  </h1>
                  <h2>
                    {Math.round(
                      product.price / (1 - product.discountPercentage / 100)
                    )}{" "}
                    <FaDollarSign />
                  </h2>
                </Flex>
              </div>
            </Slide>
          </a>
        ))}
      </Slider>
      <MostRated />
    </Flex>
  );
};
