import { ProductsList } from "@components/ProductsList";
import { ReactElement } from "react";
import { DiscountSlider } from "@components/DiscountSlider/DiscountSlider";

export const ProductsPage = (): ReactElement => {
  return (
    <main>
      <DiscountSlider />
      <ProductsList />
    </main>
  );
};
