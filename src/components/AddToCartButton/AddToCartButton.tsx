import { ReactElement, ReactNode } from "react";
import { IProduct } from "@/types/Products";
import { useCart } from "@hooks/useCart";
import { Flex } from "@components/ui/Flex";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Button } from "@components/ui/Button";
import "./style.scss";

interface IAddToCartButtonProps {
  children: ReactNode;
  productData: IProduct;
}

interface IInCartControlsProps {
  product: IProduct;
}

const InCartControls: React.FC<IInCartControlsProps> = ({
  product,
}): ReactElement => {
  const { cart, addToCart, removeFromCart } = useCart((state) => state);
  const countSameIdItems = () => {
    return cart.reduce((acc, item) => {
      if (item.id === product.id) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  };
  return (
    <Flex justifyContent="space-between" className="in-cart-controls">
      <Flex className="in-cart-controls__buttons" justifyContent="center" alignItems="align-center">
        <Button onClickAction={() => removeFromCart(product)}>
          <FaMinus />
        </Button>
      </Flex>
      <Flex justifyContent="center" alignItems="align-center">
        {countSameIdItems()}
      </Flex>
      <Flex justifyContent="center" alignItems="align-center">
        <Button onClickAction={() => addToCart(product)}>
          <FaPlus />
        </Button>
      </Flex>
    </Flex>
  );
};

export const AddToCartButton: React.FC<IAddToCartButtonProps> = ({
  children,
  productData,
}): ReactElement => {
  const { cart } = useCart((state) => state);
  if (cart.find((item) => item.id === productData.id)) {
    return <InCartControls product={productData} />;
  }
  return <div>{children}</div>;
};
