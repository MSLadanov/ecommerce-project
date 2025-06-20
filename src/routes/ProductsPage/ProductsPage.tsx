import { Slider } from "@components/ui/Slider";
import { ProductsList } from "@components/ProductsList";
import { Slide } from "@components/ui/Slide";

export const ProductsPage = () => {
  const testSlides = [
    {
      id: 1,
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      title: "slide1",
    },
    {
      id: 2,
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/TEIDE.JPG",
      title: "slide2",
    },
    {
      id: 3,
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pencil_drawing_of_a_girl_in_ecstasy.jpg",
      title: "slide3",
    },
  ];
  const Slides = testSlides.map((slide) => (
    <Slide key={slide.id} image={slide.url} title={slide.title} />
  ));
  return (
    <main>
      <Slider withControls={false}>
        {Slides}
      </Slider>
      <ProductsList />
    </main>
  );
};
