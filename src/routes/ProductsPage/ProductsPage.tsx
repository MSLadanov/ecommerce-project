import { Slider } from "@components/ui/Slider";
import { ProductsList } from "@components/ProductsList";
import { Slide } from "@components/ui/Slide";

export const ProductsPage = () => {
  const testSlides = [
    {
      id: 1,
      url: "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
    },
    { id: 2, url: "https://en.wikipedia.org/wiki/Image#/media/File:TEIDE.JPG" },
    {
      id: 3,
      url: "https://en.wikipedia.org/wiki/Image#/media/File:Pencil_drawing_of_a_girl_in_ecstasy.jpg",
    },
  ];
  const Slides 
  return (
    <main>
      <Slider>
        <Slide />
        <Slide />
        <Slide />
      </Slider>
      <ProductsList />
    </main>
  );
};
