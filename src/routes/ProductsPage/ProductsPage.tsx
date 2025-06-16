import { Slider } from "@components/ui/Slider";
import { ProductsList } from "@components/ProductsList";
import { Slide } from "@components/ui/Slide";

export const ProductsPage = () => {
  return (
    <main>
      <Slider>
        <Slide />
        <Slide/>
        <Slide/>
      </Slider>
      <ProductsList />
    </main>
  );
};
