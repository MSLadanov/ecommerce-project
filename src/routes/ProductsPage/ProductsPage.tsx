import { ProductsList } from "@components/ProductsList";
import { ReactElement } from "react";
import { DiscountSlider } from "@components/DiscountSlider/DiscountSlider";
import { ProductCategories } from "@components/ProductCategories";

export const ProductsPage = () : ReactElement => {
  return (
    <main>
      <ProductCategories/>
      <DiscountSlider/>
      <ProductsList />
    </main>
  );
};
